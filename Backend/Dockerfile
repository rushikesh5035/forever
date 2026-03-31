
# Stage 1: install only production dependencies
FROM node:20-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

# Stage 2: minimal runtime image
FROM node:20-alpine AS runner

WORKDIR /app

# Production runtime settings
ENV NODE_ENV=production
ENV PORT=4000

# Run as non-root user for better security
RUN addgroup -S nodejs && adduser -S nodeuser -G nodejs

# Bring in runtime deps and source code
COPY --from=deps /app/node_modules ./node_modules

COPY . .

USER nodeuser

EXPOSE 4000

# Health check on root endpoint
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- "http://127.0.0.1:${PORT}/" >/dev/null || exit 1

# Start API server
CMD ["node", "server.js"]
