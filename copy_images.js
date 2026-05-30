const fs = require('fs');
const path = require('path');

const srcDir = String.raw`C:\Users\user\.gemini\antigravity\brain\39d819e2-a697-460b-b9b2-828b849d32ea`;
const dstDir = String.raw`c:\Users\user\Downloads\jc-led-nextjs-v2_1\jc-led-clean\public\portfolio`;

const files = [
  ["portfolio_wedding_01_1778967746190.png", "wedding-01.jpg"],
  ["portfolio_seminar_01_1778967808180.png", "seminar-01.jpg"],
  ["portfolio_booth_01_1778967821813.png",   "booth-01.jpg"],
  ["portfolio_meeting_01_1778967835461.png", "meeting-01.jpg"],
  ["portfolio_wedding_02_1778967856700.png", "wedding-02.jpg"],
  ["portfolio_booth_02_1778967931617.png",   "booth-02.jpg"],
  ["portfolio_seminar_02_1778967957259.png", "seminar-02.jpg"],
  ["portfolio_wedding_03_1778967971212.png", "wedding-03.jpg"],
  ["portfolio_meeting_02_1778968205110.png", "meeting-02.jpg"],
];

if (!fs.existsSync(dstDir)) fs.mkdirSync(dstDir, { recursive: true });

for (const [srcName, dstName] of files) {
  const src = path.join(srcDir, srcName);
  const dst = path.join(dstDir, dstName);
  process.stdout.write(`Copying ${srcName} -> ${dstName} ... `);
  fs.copyFileSync(src, dst);
  console.log('OK');
}

console.log('All done!');
