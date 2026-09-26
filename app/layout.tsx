import type React from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className="font-sans antialiased m-0 p-0">
        {children}
      </body>
    </html>
  )
}