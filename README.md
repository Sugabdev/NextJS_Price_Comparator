# 🛒 Comparador de precios

Aplicación web que permite buscar un producto mediante un formulario simple en varias tiendas online. Actualmente soporta **Amazon**, **Newegg** y **Mercado Libre**, pero se pueden agregar más fácilmente modificando el array de scrapers en [`/app/scraper/route.ts`](./app/scraper/route.ts).

El proyecto utiliza **Playwright** para realizar el scraping de datos y **Next.js** para la estructura y renderizado de la aplicación.

---

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/) – Framework de React para el frontend y backend.
- [TailwindCSS](https://tailwindcss.com/) – Estilos modernos y responsivos.
- [Playwright](https://playwright.dev/) – Scraper de tiendas online.
- [TypeScript](https://www.typescriptlang.org/) – Tipado estático para mayor robustez.

---

## ⚡ Instalación y uso

Clona este repositorio y ejecuta los siguientes comandos:

```bash
# Instalar dependencias
npm install

# Iniciar entorno de desarrollo
npm run dev
