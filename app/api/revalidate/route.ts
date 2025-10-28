import { revalidatePath } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Ověření secret tokenu pro zabezpečení
    const secret = request.nextUrl.searchParams.get("secret")

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
    }

    const body = await request.json()
    const { type, slug } = body

    console.log("[v0] Revalidation triggered:", { type, slug })

    // Revalidace podle typu obsahu
    switch (type) {
      case "clanek":
        // Revalidace seznamu článků
        revalidatePath("/blog")
        // Revalidace konkrétního článku, pokud je slug
        if (slug) {
          revalidatePath(`/blog/${slug}`)
          console.log("[v0] Revalidated blog article:", slug)
        }
        break

      case "projekt":
        // Revalidace portfolia
        revalidatePath("/portfolio")
        if (slug) {
          revalidatePath(`/portfolio/${slug}`)
          console.log("[v0] Revalidated portfolio project:", slug)
        }
        break

      case "sluzba":
        // Revalidace služeb
        revalidatePath("/sluzby")
        if (slug) {
          revalidatePath(`/sluzby/${slug}`)
          console.log("[v0] Revalidated service:", slug)
        }
        break

      default:
        // Revalidace všech hlavních stránek
        revalidatePath("/")
        revalidatePath("/blog")
        revalidatePath("/portfolio")
        revalidatePath("/sluzby")
        console.log("[v0] Revalidated all main pages")
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      type,
      slug,
    })
  } catch (error) {
    console.error("[v0] Revalidation error:", error)
    return NextResponse.json({ message: "Error revalidating", error: String(error) }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret")
  const path = request.nextUrl.searchParams.get("path")

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
  }

  if (path) {
    revalidatePath(path)
    return NextResponse.json({
      revalidated: true,
      path,
      now: Date.now(),
    })
  }

  return NextResponse.json({ message: "Missing path parameter" }, { status: 400 })
}
