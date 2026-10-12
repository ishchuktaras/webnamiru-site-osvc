export interface Sluzba {
  _id: string
  title: string
  slug: {
    current: string
  }
  shortDescription: string
  mainImage?: {
    asset: {
      _ref: string
      _type: "reference"
    }
    alt?: string
  }
  content: any[] // Block content
  seoTitle?: string
  seoDescription?: string
}

export interface Projekt {
  _id: string
  title: string
  slug: {
    current: string
  }
  clientName: string
  coverImage?: {
    asset: {
      _ref: string
      _type: "reference"
    }
    alt?: string
  }
  gallery?: Array<{
    asset: {
      _ref: string
      _type: "reference"
    }
    alt?: string
  }>
  description: any[] // Block content
  url?: string
  publishedAt: string
}

export interface Clanek {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  mainImage?: {
    asset: {
      _ref: string
      _type: "reference"
    }
    alt?: string
  }
  summary: string
  body: any[] // Block content
}
