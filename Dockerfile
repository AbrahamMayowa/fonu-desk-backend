# --- BUILD STAGE ---
FROM node:20-alpine AS builder

WORKDIR /app

# Install system dependencies needed for Node packages (e.g. build tools if any)
RUN apk add --no-cache libc6-compat

# Copy package management files
COPY package.json yarn.lock ./

# Install all dependencies (including devDependencies)
RUN yarn install --frozen-lockfile

# Copy the rest of the application source code and configurations
COPY . .

# Generate Prisma Client
RUN yarn prisma:generate

# Build the NestJS application
RUN yarn build

# Remove development dependencies to keep production image size minimal
RUN rm -rf node_modules && yarn install --production --frozen-lockfile && yarn prisma:generate


# --- PRODUCTION RUN STAGE ---
FROM node:20-alpine AS runner

WORKDIR /app

# Ensure we run in production mode
ENV NODE_ENV=production

# Copy necessary files from the build stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

# Expose the API port
EXPOSE 4000

# Start the NestJS backend application
CMD ["node", "dist/main.js"]
