# Car Finder Web App

A modern, responsive car finder application built with Next.js, featuring real-time filtering, wishlist functionality, and dark mode support.

## Features

- 🚗 Search and filter cars by brand, price range, fuel type, and seating capacity
- 💖 Add cars to wishlist (stored in LocalStorage)
- 🌓 Dark mode support
- 📱 Fully responsive design
- ⚡ Real-time UI updates
- 📄 Pagination support
- 🎨 Beautiful UI with smooth animations

## Tech Stack

- Next.js 13 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Local Storage for wishlist persistence

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/types` - TypeScript type definitions
- `/data` - Mock car data (replace with API in production)

## Features Implementation

### Search and Filtering
- Real-time filtering based on multiple criteria
- Price range slider with min/max values
- Brand and fuel type dropdown filters
- Seating capacity selection

### Wishlist
- Add/remove cars from wishlist
- Persistent storage using LocalStorage
- Visual feedback with toast notifications

### UI/UX
- Responsive grid layout
- Dark mode toggle
- Loading states
- Smooth transitions and hover effects
- Pagination for large datasets

## Deployment

Build the application for production:

```bash
npm run build
```

The static output will be generated in the `out` directory, ready for deployment to any static hosting service.