import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "webnamiru.site",
  description: "Web Development Studio",
  icons: {
    icon: "/icon.svg", 
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 0 }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}