#!/bin/sh
set -e

echo "Running Prisma migrations..."
npx prisma migrate deploy

echo "Running database seed..."
node dist/prisma/seed.js

echo "Starting application..."
exec "$@"
