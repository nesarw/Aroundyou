# aroundyou

A mobile-first geo-social networking React app.

## Features
- Create profiles with avatar (not real photos initially)
- View nearby users within a 3km radius
- Send ephemeral "whispers" (view-once messages active for 60s)
- Match if both users send whispers to each other
- Unlock chat and real photo reveal after mutual match + consent
- Bottom tab bar navigation: Discover, Inbox, Matches, Profile

## Tech Stack
- React + Vite
- React Router DOM
- Tailwind CSS

## Project Structure
```
src/
  components/      # Shared UI elements (ProfileCard, WhisperModal, BottomNav, ...)
  pages/           # Route-based components (Login, Signup, Discover, ...)
  services/        # API service files (auth.js, whispers.js, ...)
  contexts/        # React context providers (AuthContext, ...)
  hooks/           # Custom hooks (useGeoLocation, useWhisperTimer, ...)
  utils/           # Helper functions (formatTime, tagProcessor, ...)
  assets/          # Static images, icons
  routes/          # Route configs
  App.jsx          # Main app layout with routing
  main.jsx         # App entry point
```

## Setup
```sh
npm install
npm run dev
```

## TODO
- Implement all placeholder components and logic
