# Edwin Caudilla Daza — Portfolio

Next.js portfolio site.

## Structure
- `app/page.js` — main page (About, Skills, Funnel Samples, Contact)
- `app/layout.js` — root layout / metadata
- `app/globals.css` — styling
- `public/samples/` — put funnel sample images/screenshots here, then add a `.sample-card` block in `app/page.js` under `#samples-container` referencing the image

## Editing
- Replace placeholder text in `app/page.js` (bio, skills, contact email) with real profile details.
- To add a funnel sample, copy this block into the samples grid and update the image/text:

```jsx
<div className="sample-card">
  <div className="sample-thumb"><img src="/samples/your-image.jpg" alt="Funnel sample" /></div>
  <div className="sample-info">
    <h3>Sample Title</h3>
    <p>Short description.</p>
  </div>
</div>
```

## Running locally
```
npm install
npm run dev
```
Then open http://localhost:3000

## Deploying
Push to `main` — Vercel auto-detects the Next.js framework preset and deploys.
