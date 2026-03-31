# syntax=docker/dockerfile:1

# Stage 1: dependency installation (cached when package files don't change)
FROM node:20-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Stage 2: build static assets
FROM node:20-alpine AS builder
WORKDIR /app

# Build-time API URL for Vite (optional)
ARG VITE_BACKEND_URL=""
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

# Reuse installed dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY package*.json ./
COPY . .
RUN npm run build

# Stage 3: production runtime with unprivileged Nginx (non-root)
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runner

USER root

# Remove default Nginx config and default static content
RUN rm -f /etc/nginx/conf.d/default.conf && \
    rm -rf /usr/share/nginx/html/*

# Copy custom Nginx config and built static assets
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

# Ensure runtime user can read assets (usually already true, kept explicit)
RUN chmod -R 755 /usr/share/nginx/html

USER 101

EXPOSE 8080

# Simple liveness health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/ >/dev/null || exit 1

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
