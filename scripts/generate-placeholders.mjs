import { writeFileSync, mkdirSync } from "fs";

mkdirSync("public/images", { recursive: true });

const placeholders = [
  { name: "hero-1.svg", gradient: ["#c9a96e", "#8b7355"], label: "Sunset Yoga" },
  { name: "hero-2.svg", gradient: ["#6b7b6e", "#4a5a4e"], label: "Ocean Calm" },
  { name: "hero-3.svg", gradient: ["#a08060", "#7a6050"], label: "Beach Rocks" },
  { name: "avatar.svg", gradient: ["#d4c5b0", "#b0a090"], label: "Avatar" },
  { name: "about.svg", gradient: ["#8b9b7e", "#6b7b5e"], label: "About" },
  { name: "gallery-1.svg", gradient: ["#c9a96e", "#a08060"], label: "Gallery 1" },
  { name: "gallery-2.svg", gradient: ["#6b7b6e", "#8b9b7e"], label: "Gallery 2" },
  { name: "gallery-3.svg", gradient: ["#a08060", "#c9a96e"], label: "Gallery 3" },
  { name: "gallery-4.svg", gradient: ["#8b7355", "#6b5b3e"], label: "Gallery 4" },
  { name: "phuket-map.svg", gradient: ["#d4c5b0", "#c9a96e"], label: "Phuket Map" },
];

for (const p of placeholders) {
  const isAvatar = p.name === "avatar.svg";
  const w = isAvatar ? 200 : 1200;
  const h = isAvatar ? 200 : 800;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" style="stop-color:${p.gradient[0]}"/>
    <stop offset="100%" style="stop-color:${p.gradient[1]}"/>
  </linearGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="${isAvatar ? 16 : 32}" fill="rgba(255,255,255,0.6)">${p.label}</text>
</svg>`;
  writeFileSync(`public/images/${p.name}`, svg);
}

console.log("Placeholder images generated.");
