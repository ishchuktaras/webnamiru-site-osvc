/** @type {import('next').NextConfig} */
const nextConfig = {
  // Důležité: Tvoje sitemap.ts generuje URL bez lomítek,
  // takže server nesmí vynucovat lomítka.
  trailingSlash: false, 

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
}
export default nextConfig