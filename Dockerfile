FROM node:22-slim

WORKDIR /app

# Copiar solo el build standalone
COPY .next/standalone ./

# Copiar public y otros assets si es necesario
COPY public ./public

# Instalar Chromium de Playwright
RUN npx playwright install --with-deps chromium

EXPOSE 3000

# Start de la app
CMD ["node", "server.js"]
