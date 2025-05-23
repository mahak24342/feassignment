This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Made by Mahak Porwal

```
## Overview
A responsive Dashboard built with **Next.js** and **NextAuth.js**, featuring secure Google sign-in,
dynamic filtering by order status, and a clean Tailwind-powered UI. It ensures only authenticated users can view and manage orders.

```

## Tech Stack
*Framework: Next.js (App Router)
*Auth: Google Sign-In via NextAuth.js
*Styling: Tailwind CSS
*State Management: Local component state
*Hosting: Vercel

```
## Authentication
*Implemented using NextAuth.js.
*Users must sign in with Google to access protected pages.
*If not signed in, they're redirected to a login page with a styled Google Sign-In button.

```
## Navigation
*A responsive Nav component with:
*Links to Home and Pizza Orders
*Profile image
*Sign Out button
*Collapsible mobile menu using lucide-react icons

```
##Orders Page

Displays a table of pizza orders.
Features include:
Responsive layout
Status-based color-coded badges
Filtering by order status (e.g., Delivered, Cancelled)
Clear message when no orders match the filter


```
