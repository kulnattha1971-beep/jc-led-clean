import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'portfolio.json');

export async function GET() {
  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File | null;
    const type = formData.get('type') as string || 'General';
    const loc = formData.get('loc') as string || 'Bangkok';
    const spec = formData.get('spec') as string || 'LED Screen';
    const bg = formData.get('bg') as string || '#111111';

    if (!file) {
      return NextResponse.json({ error: "No image file provided." }, { status: 400 });
    }

    // Save the file
    const buffer = Buffer.from(await file.arrayBuffer());
    // Create a safe filename
    const filename = Date.now() + "_" + file.name.replace(/[^a-zA-Z0-9.\-_]/g, '');
    const publicUploadsDir = path.join(process.cwd(), 'public', 'uploads');
    
    // Ensure directory exists
    await fs.mkdir(publicUploadsDir, { recursive: true });
    await fs.writeFile(path.join(publicUploadsDir, filename), buffer);

    const imageUrl = `/uploads/${filename}`;

    // Read existing data
    let currentData = [];
    try {
      const fileContents = await fs.readFile(dataFilePath, 'utf8');
      currentData = JSON.parse(fileContents);
    } catch (e) {
      // file might not exist yet, which is fine
    }

    const newItem = {
      id: Date.now().toString(),
      type,
      loc,
      spec,
      bg,
      image: imageUrl
    };

    currentData.push(newItem);

    // Save updated data
    await fs.writeFile(dataFilePath, JSON.stringify(currentData, null, 2), 'utf8');

    return NextResponse.json({ success: true, item: newItem });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
