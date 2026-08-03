const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');

ffmpeg.setFfmpegPath(ffmpegStatic);

const VIDEO_DIR = path.join(__dirname, 'src', 'assets', 'video');

if (!fs.existsSync(VIDEO_DIR)) {
  console.log('Video directory not found!');
  process.exit(1);
}

const files = fs.readdirSync(VIDEO_DIR);
const mp4Files = files.filter(file => file.toLowerCase().endsWith('.mp4'));

if (mp4Files.length === 0) {
  console.log('No .mp4 files found to convert.');
  process.exit(0);
}

async function convertFile(file) {
  return new Promise((resolve, reject) => {
    const inputPath = path.join(VIDEO_DIR, file);
    const outputPath = path.join(VIDEO_DIR, file.replace(/\.mp4$/i, '.webm'));

    console.log(`Starting conversion: ${file}...`);

    ffmpeg(inputPath)
      .output(outputPath)
      .videoCodec('libvpx-vp9')
      // WebM requires VP8 or VP9. VP9 is better for size/quality.
      .outputOptions([
        '-crf 30', // Constant Rate Factor for quality (lower is better, 30 is good balance)
        '-b:v 0',  // Required when using CRF
        '-preset fast'
      ])
      .audioCodec('libopus') // Opus is standard for WebM audio
      .on('end', () => {
        console.log(`Finished converting: ${file}`);
        // Optionally delete the original file
        fs.unlinkSync(inputPath);
        console.log(`Deleted original: ${file}`);
        resolve();
      })
      .on('error', (err) => {
        console.error(`Error converting ${file}:`, err);
        reject(err);
      })
      .run();
  });
}

async function main() {
  for (const file of mp4Files) {
    try {
      await convertFile(file);
    } catch (err) {
      console.error(`Failed on ${file}, skipping to next.`);
    }
  }
  console.log('All conversions complete!');
}

main();
