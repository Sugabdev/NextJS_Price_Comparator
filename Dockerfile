# Etapa 1: Build
FROM node:20-slim AS builder

# Instalar dependencias necesarias para build
RUN apt-get update && apt-get install -y \
  python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# Instalar Chromium para Playwright (solo necesario en runtime)
RUN npx playwright install --with-deps chromium

# Etapa 2: Runtime
FROM node:20-slim AS runner

# Instalar dependencias mínimas para Chromium
RUN apt-get update && apt-get install -y \
  libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon0 libxcomposite1 \
  libxdamage1 libxrandr2 libgbm1 libasound2 libpangocairo-1.0-0 libpango-1.0-0 \
  libcairo2 libnss3 libx11-xcb1 libxshmfence1 xvfb \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiamos el standalone build y node_modules de playwright
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "server.js"]
