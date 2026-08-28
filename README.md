# News homepage

My solution to the [News homepage](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://news-homepage.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/news-homepage

## Built with

- Next.js 16, App Router, static export
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

### Colour

Three pairings fail, and two of them are the same ink:

|                     | design             | built              | contrast     |
| ------------------- | ------------------ | ------------------ | ------------ |
| Rank numbers        | `#C5C6CE`          | `#8E909F`          | 1.68 to 3.11 |
| "Read more" label   | white on `#F15D51` | white on `#D3413B` | 3.22 to 4.51 |
| Nav and title hover | `#F15D51`          | `#D3413B`          | 3.22 to 4.51 |

**The soft red is the closest colour to the original that clears 4.5:1.** A search over the
sRGB cube puts it about 10 ΔE away with the a\* and b\* channels essentially unchanged and
only lightness dropping. Holding the style guide's hue and just lowering lightness also
reaches 4.5:1, but 26 ΔE away, and it reads as a different, far more saturated red.

**The grayish blue splits into two tokens.** The design uses one grey for the rank numbers
and the sidebar excerpts. On the dark panel it's 12:1 and ships untouched; on the off-white
page it's 1.68 and darkens. That's a visible change, and the 01/02/03 markers read noticeably
darker than the mockup.

### Layout

**The desktop layout starts at 1024, but the 56px headline waits until 1120.** The headline
sits in one half of the hero column, and "The Bright" needs 289px to keep the design's
three-line break. At 1024 that column is 267px, so the headline holds its 40px mobile size
until the column clears 289 with room for a scrollbar the media query doesn't subtract. From
1190 up everything matches the 1440 design exactly.

**The headline is capped in `em`, not pixels.** "The Bright Future" renders 342.9px against a
343.2px mobile column. It clears by three tenths of a pixel and collapses the design's three
lines into two. An `em` cap scales with the type, so one declaration holds the break at 40px
and gets out of the way at 56.

**There's no tablet frame, so that band is a decision.** Below 640 the page is capped at 480px
so the mobile layout never stretches; untethered at 767 it rendered the hero at 735x643, which
is the worst the page ever looks. From 640 the hero switches to the desktop crop, the copy
splits into two columns and the nav replaces the hamburger.

The sidebar's article list stays one column at every width. Three columns across the tablet
panel gives each excerpt about 22 characters a line, which is worse than the long lines it was
meant to fix.

### Images

**Both hero crops ship and exactly one is fetched.** The mobile and desktop assets are
different crops, not scalings, so the hero is a `<picture>` with a `media` source.
`next/image` can't express that, and worse, it re-asserts its own `src` after hydration, which
discards the chosen source and loads the mobile crop on desktop.

The thumbnails are plain `<img>` for a different reason: a static export forces
`images.unoptimized`, so `next/image` was contributing a 15KB client chunk on top of
`width`, `height` and `loading`, which do the same job natively.

All five images ship as WebP rather than the JPGs the challenge provides. At quality 80 they
go from 168.6KB to 94.5KB with no visible change, since every asset is 2x and renders at half
size. The hero alone drops from 88.2KB to 47.3KB and it's the LCP.

Every image is decorative and takes `alt=""`. The hero is abstract art restating the headline
beside it, and each thumbnail sits next to a title that already names the article.

### Other

**Tailwind's source detection has to exclude markdown.** Left on auto it scans `README.md`,
where prose words like "rounded", "border" and "outline" are valid utility names and get
emitted as real CSS, along with any class name quoted in a fenced block.

**The scroll lock is a class that releases itself at the menu's breakpoint.** Locking
`document.body` from JavaScript strands the page if the viewport crosses into the desktop
layout while the menu is open: the overlay disappears by CSS but the lock survives, and
rotating a phone is enough to hit it. `overflow-hidden sm:overflow-visible` can't get into
that state whether or not a resize listener fires.

The overlay animates `visibility`, not `display`. It's already hidden by `sm:hidden` at
desktop widths, so toggling `display` from state would have two rules fighting over one
property.

Nothing in the design has a focus state and the brief asks for one, so it's a 2px outline in
the new red, which clears 3:1 against both the page and the dark panel. Hover states sit
behind `@media (hover: hover)` so they can't stick on touch.

**No scroll reveals.** At 1440x1024 the document is 1031px against a 1024px viewport. Seven
pixels of scroll, so a reveal could never run.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
