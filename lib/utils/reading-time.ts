/**
 * Calculate reading time for article content
 * Average reading speed: 200 words per minute (Czech language)
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return minutes
}

/**
 * Format reading time for display
 */
export function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return "1 minuta"
  } else if (minutes >= 2 && minutes <= 4) {
    return `${minutes} minuty`
  } else {
    return `${minutes} minut`
  }
}

/**
 * Extract plain text from Portable Text blocks
 */
export function extractTextFromPortableText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return ""

  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return ""
      }
      return block.children.map((child: any) => child.text).join("")
    })
    .join(" ")
}
