# Usa Node.js 22 (coincide con tu entorno local)
FROM node:22-slim AS base

# Instala dependencias necesarias para que Chromium de Playwright funcione
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

# Crea directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json primero (para aprovechar cache de Docker)
COPY package*.json ./

# Instala dependencias (no dev en producción)
RUN npm ci --omit=dev

# Copia el resto del código
COPY . .

# Construye la app Next.js
RUN npm run build

# Playwright necesita descargar Chromium en la imagen final
RUN npx playwright install --with-deps chromium

# Expone el puerto
EXPOSE 3000

# Comando para arrancar la app en producción
CMD ["npm", "start"]
