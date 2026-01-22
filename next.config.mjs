/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // <--- TOTO JE TO KLÍČOVÉ, CO TI CHYBĚLO!

  // Tvoje nastavení (zachováno)
  trailingSlash: false, 
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  
  images: { 
    unoptimized: true,
    // Pro jistotu definujeme i zdroje obrázků, kdyby se unoptimized vypnulo
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  },
}

export default nextConfig;