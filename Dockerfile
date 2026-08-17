# --- STAGE 1: Build ---
FROM node:22-alpine AS builder

WORKDIR /app

# Install system dependencies (libc6-compat for native modules, dumb-init for process management)
RUN apk add --no-cache libc6-compat dumb-init

# Copy package dependency definitions
COPY package.json yarn.lock ./

# Install all dependencies (including devDependencies) deterministically
RUN yarn install --frozen-lockfile

# Copy application source code and configurations
COPY . .

# Generate Prisma Client
RUN yarn prisma:generate

# Build NestJS production assets
RUN yarn build

# Prune devDependencies to keep production image footprint minimal
RUN rm -rf node_modules && yarn install --production --frozen-lockfile && yarn prisma:generate


# --- STAGE 2: Production Runner ---
FROM node:22-alpine AS runner

WORKDIR /app

# Install dumb-init for PID 1 signal forwarding (SIGTERM / SIGINT)
RUN apk add --no-cache dumb-init

ENV NODE_ENV=production

# Ensure app directory permissions for non-root node user
RUN chown node:node /app

# Security best practice: Run application as non-root user
USER node

# Copy compiled artifacts, production dependencies, package metadata, and schema
COPY --chown=node:node --from=builder /app/package.json ./
COPY --chown=node:node --from=builder /app/yarn.lock ./
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/dist ./dist
COPY --chown=node:node --from=builder /app/prisma ./prisma

EXPOSE 4000

# Use dumb-init as entrypoint wrapper for proper PID 1 signal handling
ENTRYPOINT ["/usr/bin/dumb-init", "--"]

CMD ["node", "dist/src/main.js"]
