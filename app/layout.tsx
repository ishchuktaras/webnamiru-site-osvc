import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "webnamiru.site",
  description: "Web Development Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}