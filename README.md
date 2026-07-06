# Tres Jolie — Online Shopping Store

A e-commerce storefront built with React, TypeScript, and Material UI. Browse products by category, manage a shopping cart, and check out — all backed by the [DummyJSON](https://dummyjson.com/) products API.

## Link to vercel deployment
[text](https://tres-jolie-online-store.vercel.app/)

## Features

- **Home page** — hero banner with a "Shop Now" call to action, plus a "New Arrivals" section featuring products from the Women's Dresses category.
- **Product catalog** (`/products`) — grid of product cards with images, price, and quantity selector, filterable by category via a collapsible tree sidebar (Beauty, Fragrances, Skin Care, Women's Dresses/Shoes/Watches/Bags/Jewellery, Sunglasses, Tops).
- **Shopping cart** (`/cart`) — persists selected products and quantities (via Zustand), lets you remove items, and select individual items to move to checkout.
- **Payment summary** — running total for items selected at checkout.
- **Client-side routing** with `react-router`, including a dedicated error page for unmatched/broken routes.
- **Responsive layout** built with MUI's `Box`/`Grid` system and custom theming (Playfair Display + Roboto fonts).

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — dev server & build tooling
- [Material UI](https://mui.com/) (`@mui/material`, `@mui/icons-material`, `@mui/x-tree-view`) — components and category tree
- [Zustand](https://github.com/pmndrs/zustand) — cart state management
- [React Router](https://reactrouter.com/) — client-side routing
- [Axios](https://axios-http.com/) — data fetching from the DummyJSON API
- [Oxlint](https://oxc.rs/) — linting

## Project Structure

```
src/
├── components/       # Reusable UI: Navbar, ProductCard, CategoriesSidebar, PaymentSummary, ...
├── pages/            # Route-level pages: HomePage, ShopPage, ShoppingCartPage, ErrorPage
├── services/         # Data-fetching hooks (useGetProducts, useGetProductsDetails) hitting DummyJSON
├── store/            # Zustand cart store (useCartStore)
├── types/            # Shared TypeScript types (productType)
└── routes.tsx         # Route definitions
```

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Other scripts

| Command           | Description                              |
| ------------------ | ----------------------------------------- |
| `npm run build`   | Type-checks (`tsc -b`) and builds for production into `dist/` |
| `npm run preview` | Serves the production build locally       |
| `npm run lint`    | Runs Oxlint                               |

## Data Source

Product data is fetched live from the public [DummyJSON Products API](https://dummyjson.com/products) — no backend or API key is required.
