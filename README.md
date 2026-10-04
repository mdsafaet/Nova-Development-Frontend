# Nova React

React + Vite project reorganized from the supplied nova-global.zip.

## Run

Use Node.js 20.19+ or 22.12+ and npm.

```sh
npm ci
npm run dev
```

Build with `npm run build`; preview with `npm run preview`.
Configure production hosting to serve index.html for client-side routes.

## Organization

- src/main.jsx loads global styles and renders App.jsx.
- src/App.jsx owns the browser router; routes/AppRoutes.jsx defines pages.
- src/layouts/MainLayouts.jsx composes shared navigation, scrolling and chat.
- src/components/home contains Hero, MarketStrip, Intro, Chairman, VisionMission, Portfolio, Presence, Investors, BrandStory, Journal, Responsibility, Contact, Newsletter and NovaOne.
- src/components/common contains the requested shared components plus the existing SocialLinks.
- src/assets/images/index.js exports the image registry and public video URL.
- src/styles/index.css contains the original stylesheet, with updated image URLs.
- src/data contains company, markets, navigation, projects, news and responsibility modules.
- src/hooks retains useScrollReveal.js.

All existing pages, page-specific component folders, additional images and chat integration are retained to preserve the original app. The original homepage section order and appearance are preserved. MarketStrip and SmoothScroll are extracted and used; new shared utilities are available for reuse. Presence is an optional component, not mounted by default. WebGLScene is an optional canvas host requiring a setup callback, not a finished scene. Company, market, news and responsibility data are available for future reuse; existing inline content is preserved. Navigation data is used by Header.

## Assets not supplied

The input archive did not contain public/cities/dubai.png, dhaka.png, new-york.png, london.png or public/videos/video30.mp4. Their destination folders are ready; add the original files when available. No fake images or duplicate video were substituted. The supplied video.mp4 is in public/videos. favicon.svg embeds the original logo PNG.

External fonts, flags and the existing chat integration still require network access. Original form and link behavior has not been expanded into backend services.
