import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        try {
          console.log(`Optimizing: ${fullPath}`);
          
          const imageBuffer = await fs.readFile(fullPath);
          const image = sharp(imageBuffer);
          const metadata = await image.metadata();

          let pipeline = image;

          // Resize if width is larger than 1920
          if (metadata.width > 1920) {
            pipeline = pipeline.resize(1920, null, { withoutEnlargement: true });
          }

          if (ext === '.jpg' || ext === '.jpeg') {
            pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
          } else if (ext === '.png') {
            pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
          }

          const outputBuffer = await pipeline.toBuffer();
          
          // Save only if it's smaller
          if (outputBuffer.length < imageBuffer.length) {
            await fs.writeFile(fullPath, outputBuffer);
            console.log(`Saved ${(imageBuffer.length - outputBuffer.length) / 1024} KB for ${entry.name}`);
          } else {
            console.log(`Skipped ${entry.name} (no size reduction)`);
          }

        } catch (err) {
          console.error(`Error processing ${fullPath}:`, err);
        }
      }
    }
  }
}

async function main() {
  console.log('Starting image optimization...');
  await processDirectory(publicDir);
  console.log('Finished image optimization!');
}

main().catch(console.error);
