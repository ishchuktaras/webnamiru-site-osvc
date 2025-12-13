// lib/seo/structured-data.ts

// Utility funkce pro generování strukturovaných dat (Schema.org JSON-LD)

export interface LocalBusinessData {
  name: string
  description: string
  image?: string
  telephone?: string
  email: string
  address: {
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressRegion: string
    addressCountry: string
  }
  founder: {
    name: string
    url: string
  }
}

export interface ServiceData {
  serviceType: string
  name: string
  description: string
  url: string
  provider: {
    name: string
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
  offers?: {
    priceCurrency: string
    price: string
    description?: string
  }
}

export interface ArticleData {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified: string
  author: {
    name: string
    url: string
  }
  publisher: {
    name: string
    logo: string
  }
}

export interface FAQData {
  questions: Array<{
    question: string
    answer: string
  }>
}

export function generateLocalBusinessSchema(data: LocalBusinessData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.name,
    description: data.description,
    image: data.image,
    url: "https://webnamiru.site",
    telephone: data.telephone,
    email: data.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      postalCode: data.address.postalCode,
      addressRegion: data.address.addressRegion,
      addressCountry: data.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.3961,
      longitude: 15.5911,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    founder: {
      "@type": "Person",
      name: data.founder.name,
      url: data.founder.url,
    },
    priceRange: "$$",
    areaServed: [
      {
        "@type": "City",
        name: "Jihlava",
      },
      {
        "@type": "State",
        name: "Kraj Vysočina",
      },
      {
        "@type": "Country",
        name: "Česká republika",
      },
    ],
  }
}

export function generateServiceSchema(data: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.serviceType,
    name: data.name,
    description: data.description,
    url: data.url,
    provider: {
      "@type": "LocalBusiness",
      name: data.provider.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: data.provider.addressLocality,
        addressRegion: data.provider.addressRegion,
        addressCountry: data.provider.addressCountry,
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Česká republika",
    },
    ...(data.offers && {
      offers: {
        "@type": "Offer",
        priceCurrency: data.offers.priceCurrency,
        price: data.offers.price,
        description: data.offers.description,
      },
    }),
  }
}

export function generateArticleSchema(data: ArticleData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      "@type": "Person",
      name: data.author.name,
      url: data.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: data.publisher.name,
      logo: {
        "@type": "ImageObject",
        url: data.publisher.logo,
      },
    },
  }
}

export function generateFAQSchema(data: FAQData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
