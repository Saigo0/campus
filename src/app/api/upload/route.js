import { writeFile } from "fs/promises";
import path from "path";
import { readdir } from "fs/promises";

export const runtime = "nodejs";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return Response.json({ error: "No file" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(process.cwd(), "public/uploads", fileName);

  await writeFile(filePath, buffer);

  return Response.json({
    url: `/uploads/${fileName}`,
  });
}

export async function GET() {
  try {
    const uploadDir = path.join(process.cwd(), "public/uploads");

    const files = await readdir(uploadDir);

    const images = files.map((file) => ({
      url: `/uploads/${file}`,
    }));

    return Response.json(images);
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Failed to read images" },
      { status: 500 }
    );
  }
}