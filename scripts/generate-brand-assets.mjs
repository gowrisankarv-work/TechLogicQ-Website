import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");

const ICON_PATHS = `
  <path fill="#6366F1" d="M84.6 96.4A44 44 0 0 1 17.5 71.3L32.9 67.2A28 28 0 0 0 75.6 83.2Z" />
  <path fill="#0EA5E9" d="M16.1 63A44 44 0 0 1 71.3 17.5L67.2 32.9A28 28 0 0 0 32 61.9Z" />
  <path fill="#22D3EE" d="M79.2 20.4A44 44 0 0 1 100.3 77.6L116.5 93.9 105.2 105.2 79.8 79.8A28 28 0 0 0 72.2 34.8Z" />
`;

const ICON_PATHS_MONO = `
  <path fill="#FFFFFF" d="M84.6 96.4A44 44 0 0 1 17.5 71.3L32.9 67.2A28 28 0 0 0 75.6 83.2Z" />
  <path fill="#FFFFFF" d="M16.1 63A44 44 0 0 1 71.3 17.5L67.2 32.9A28 28 0 0 0 32 61.9Z" />
  <path fill="#22D3EE" d="M79.2 20.4A44 44 0 0 1 100.3 77.6L116.5 93.9 105.2 105.2 79.8 79.8A28 28 0 0 0 72.2 34.8Z" />
`;

function transparentIconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="14 15 105 92">${ICON_PATHS}</svg>`;
}

function appIconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <rect width="120" height="120" rx="27" fill="#0A0F2C" />
    <g transform="translate(15.73,13.73) scale(0.7045)">${ICON_PATHS_MONO}</g>
  </svg>`;
}

async function png(svg, size, outPath, { padding = 0, square = true } = {}) {
  const inner = size - padding * 2;
  const content = square
    ? await sharp(Buffer.from(svg))
        .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .extend({ top: padding, bottom: padding, left: padding, right: padding, background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer()
    : await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, content);
  return content;
}

function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * count;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  const imageBuffers = [];
  for (const { size, buffer } of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += buffer.length;
    dirEntries.push(entry);
    imageBuffers.push(buffer);
  }
  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

async function main() {
  const publicDir = path.join(ROOT, "public");
  const appDir = path.join(ROOT, "src/app");

  // Next.js app-router convention icons
  await png(appIconSvg(), 512, path.join(appDir, "icon.png"));
  await png(appIconSvg(), 180, path.join(appDir, "apple-icon.png"));

  // public/ assets
  await png(transparentIconSvg(), 512, path.join(publicDir, "logo-mark.png"));
  await writeFile(path.join(publicDir, "favicon.svg"), transparentIconSvg());
  await png(appIconSvg(), 192, path.join(publicDir, "android-chrome-192x192.png"));
  await png(appIconSvg(), 512, path.join(publicDir, "android-chrome-512x512.png"));

  const ico16 = await png(transparentIconSvg(), 16, path.join(publicDir, "favicon-16x16.png"), { padding: 1 });
  const ico32 = await png(transparentIconSvg(), 32, path.join(publicDir, "favicon-32x32.png"), { padding: 2 });
  const ico48 = await sharp(Buffer.from(transparentIconSvg()))
    .resize(44, 44)
    .extend({ top: 2, bottom: 2, left: 2, right: 2, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const ico = buildIco([
    { size: 16, buffer: ico16 },
    { size: 32, buffer: ico32 },
    { size: 48, buffer: ico48 },
  ]);
  await writeFile(path.join(publicDir, "favicon.ico"), ico);

  console.log("Brand assets generated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
