# Edwin Caudilla Daza — Portfolio

Simple static portfolio site.

## Structure
- `index.html` — main page (About, Skills, Funnel Samples, Contact)
- `style.css` — styling
- `samples/` — put funnel sample images/screenshots here, then add a `.sample-card` block in `index.html` under the `#samples-container` div referencing the image

## Editing
- Replace placeholder text in `index.html` (bio, skills, contact email) with real profile details.
- To add a funnel sample, copy this block into `#samples-container` and update the image/text:

```html
<div class="sample-card">
  <div class="sample-thumb"><img src="samples/your-image.jpg" alt="Funnel sample"></div>
  <div class="sample-info">
    <h3>Sample Title</h3>
    <p>Short description.</p>
  </div>
</div>
```

## Running locally
Just open `index.html` in a browser, or serve with:
```
python3 -m http.server 8000
```
