import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const out = dirname(fileURLToPath(import.meta.url));
await mkdir(out, { recursive: true });

const offers = [
  { slug: 'discovery', label: 'DISCOVERY CALL', lines: ['Mentorship', 'Discovery Call'], footer: 'SDR COACH' },
  { slug: 'mentorship-session', label: 'ONE MENTORSHIP CALL', lines: ['1:1 SDR', 'Mentorship', 'Session'], footer: 'SDR COACH' },
  { slug: 'mentorship-package', label: '6 TO 8 WEEKS', lines: ['1:1 Mentorship', 'Program'], footer: 'SDR COACH' },
  { slug: 'ai-workflow', label: 'HANDS-ON SESSION', lines: ['Build Your First', 'AI-Powered', 'SDR Workflow'], footer: 'PRACTICAL AI FOR SDRs' },
  { slug: 'gtm-blueprint', label: 'FOR FOUNDERS', lines: ['Build Your SDR', 'Function & GTM', 'Blueprint'], footer: 'SDR & GTM CONSULTING' },
];

const esc = (value) => value.replaceAll('&', '&amp;');

function artwork(offer, width, height, square) {
  const x = square ? 92 : 104;
  const nameY = square ? 96 : 80;
  const pillY = square ? 190 : 154;
  const titleY = square ? 370 : 315;
  const titleSize = square ? (offer.slug === 'discovery' ? 80 : 72) : (offer.slug === 'discovery' ? 90 : 78);
  const lineHeight = Math.round(titleSize * 1.03);
  const pillWidth = Math.max(square ? 330 : 350, offer.label.length * (square ? 19 : 18) + 72);
  const underlineY = titleY + offer.lines.length * lineHeight + 18;
  const footerY = height - (square ? 76 : 54);
  const title = offer.lines.map((line, i) =>
    `<text x="${x}" y="${titleY + i * lineHeight}" class="title">${esc(line)}</text>`
  ).join('\n    ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#F4ECFB"/>
  <rect width="${square ? 20 : 18}" height="${height}" fill="#7C2FD4"/>
  <style>
    .sans { font-family: Arial, Helvetica, sans-serif; }
    .name { font: 700 ${square ? 19 : 18}px Arial, Helvetica, sans-serif; letter-spacing: 4px; fill: #5A4768; }
    .label { font: 700 ${square ? 19 : 18}px Arial, Helvetica, sans-serif; letter-spacing: 3px; fill: white; }
    .title { font-family: Georgia, 'Times New Roman', serif; font-size: ${titleSize}px; font-weight: 700; fill: #241934; }
    .footer { font: 700 ${square ? 17 : 15}px Arial, Helvetica, sans-serif; letter-spacing: 3px; fill: #7C2FD4; }
  </style>
  <text x="${x}" y="${nameY}" class="name">VANDANA AGARWAL NIK</text>
  <circle cx="${width - (square ? 104 : 116)}" cy="${nameY - 7}" r="6" fill="#7C2FD4"/>
  <circle cx="${width - (square ? 82 : 94)}" cy="${nameY - 7}" r="6" fill="#7C2FD4"/>
  <rect x="${x}" y="${pillY}" width="${pillWidth}" height="58" rx="29" fill="#7C2FD4"/>
  <text x="${x + 30}" y="${pillY + 37}" class="label">${esc(offer.label)}</text>
  ${title}
  <rect x="${x}" y="${underlineY}" width="92" height="7" rx="3.5" fill="#7C2FD4"/>
  <text x="${x}" y="${footerY}" class="footer">${esc(offer.footer)}</text>
</svg>`;
}

for (const offer of offers) {
  await writeFile(join(out, `${offer.slug}-cover.svg`), artwork(offer, 1280, 780, false));
  await writeFile(join(out, `${offer.slug}-thumbnail.svg`), artwork(offer, 1024, 1024, true));
}

const readme = `# Topmate media — simple style

These files intentionally match the earlier Topmate look: pale lavender background, purple side stripe, serif title, and minimal decoration.

- Covers: 1280 × 780 px
- Thumbnails: 1024 × 1024 px
- No pricing appears in the images

The SVG files are editable masters. The PNG files are ready to upload to Topmate.
`;
await writeFile(join(out, 'README.md'), readme);
