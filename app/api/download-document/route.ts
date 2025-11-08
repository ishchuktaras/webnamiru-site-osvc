import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const doc = searchParams.get("doc")

  const documents: Record<string, { filename: string; contentType: string }> = {
    smlouva: {
      filename: "smlouva-o-dilo-sablona.md",
      contentType: "text/markdown",
    },
    sla: {
      filename: "sla-template.md",
      contentType: "text/markdown",
    },
    nda: {
      filename: "nda-template.md",
      contentType: "text/markdown",
    },
  }

  if (!doc || !documents[doc]) {
    return NextResponse.json({ error: "Document not found" }, { status: 404 })
  }

  try {
    const filePath = path.join(process.cwd(), "public", "documents", documents[doc].filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")

    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": documents[doc].contentType,
        "Content-Disposition": `attachment; filename="${documents[doc].filename}"`,
      },
    })
  } catch (error) {
    console.error("Error reading document:", error)
    return NextResponse.json({ error: "Error reading document" }, { status: 500 })
  }
}
