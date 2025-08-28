FROM node:22-slim AS base

# Dependencias necesarias para Chromium
RUN apt-get update && apt-get install -y \
    wget \
    ca-certificates \
    fonts-liberation \
    libasound2 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcursor1 \
    libxi6 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    libnss3 \
    libglib2.0-0 \
    libgdk-pixbuf2.0-0 \
    libgtk-3-0 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias (solo producción)
RUN npm ci --omit=dev

# Copiar el resto del código
COPY . .

# Construir Next.js (esto genera .next/standalone internamente)
RUN npm run build

# Instalar Chromium
RUN npx playwright install --with-deps chromium

EXPOSE 3000

CMD ["npm", "start"]
