# Adding real photography

No real photos were supplied for this build, so every image on the site renders as a
labeled placeholder (a bordered box with the expected caption) via the `SmartImage`
component at `src/components/shared/SmartImage.tsx`. This keeps every layout, aspect
ratio and grid fully working today, and makes swapping in real photos a content change,
not a code change.

## How to add a photo

1. Drop the file in this folder, e.g. `public/images/hostels/blue-heaven-1.jpg`.
2. Pass that path as the `src` prop wherever the placeholder is rendered, e.g.:

   ```tsx
   <SmartImage src="/images/hostels/blue-heaven-1.jpg" alt="Blue Heaven Hostel exterior" />
   ```

   Once `src` is provided, `SmartImage` automatically renders a real `next/image`
   instead of the placeholder — no other changes needed.

## Suggested structure

```
public/images/
  hero/              # 1 wide exterior or lifestyle shot for the homepage hero
  hostels/           # 1+ photo per branch (exterior, room, common area)
  gallery/           # the 12 shots referenced in src/data/content.ts (GALLERY_IMAGES)
  about/             # 1 building/team photo for the About page story section
```

## Recommended specs

- Format: JPEG or WebP, optimized (under ~300KB each where possible).
- Orientation matches the aspect ratio already declared per slot (see the `aspect` /
  `aspect-[...]` values passed into each `SmartImage` call, and the `aspect` field on
  each entry in `GALLERY_IMAGES`).
- Authentic photography of the actual rooms, common areas, dining areas and buildings —
  per the brief, avoid stock photography or generic hostel imagery.
