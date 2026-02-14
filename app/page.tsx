import fs from 'fs';
import path from 'path';
import HomeClient from '@/components/HomeClient';

export const dynamic = 'force-dynamic';

export default function Home() {
  // Server-side logic to get file list
  const sequenceDir = path.join(process.cwd(), 'public', 'sequence');
  let frameFiles: string[] = [];

  try {
    frameFiles = fs.readdirSync(sequenceDir)
      .filter(file => file.endsWith('.webp'))
      .sort(); // Ensure alphanumeric sort: frame_000, frame_001...
  } catch (error) {
    console.error("Error reading sequence directory:", error);
  }

  const imageUrls = frameFiles.map(file => `/sequence/${file}`);

  return <HomeClient imageUrls={imageUrls} />;
}
