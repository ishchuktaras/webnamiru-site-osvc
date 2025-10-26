import { client } from "./sanity.client"

// Fetch all services
export async function getServices() {
  return client.fetch(
    `*[_type == "sluzba"] | order(_createdAt asc) {
      _id,
      title,
      slug,
      shortDescription,
      mainImage,
      content,
      seoTitle,
      seoDescription
    }`,
  )
}

// Fetch single service by slug
export async function getServiceBySlug(slug: string) {
  return client.fetch(
    `*[_type == "sluzba" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      shortDescription,
      mainImage,
      content,
      seoTitle,
      seoDescription
    }`,
    { slug },
  )
}

// Fetch all projects (portfolio)
export async function getProjects() {
  return client.fetch(
    `*[_type == "projekt"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      clientName,
      coverImage,
      gallery,
      description,
      url,
      publishedAt
    }`,
  )
}

// Fetch single project by slug
export async function getProjectBySlug(slug: string) {
  return client.fetch(
    `*[_type == "projekt" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      clientName,
      coverImage,
      gallery,
      description,
      url,
      publishedAt
    }`,
    { slug },
  )
}

// Fetch all blog articles
export async function getArticles() {
  return client.fetch(
    `*[_type == "clanek"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      summary,
      body
    }`,
  )
}

// Fetch single article by slug
export async function getArticleBySlug(slug: string) {
  return client.fetch(
    `*[_type == "clanek" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      summary,
      body
    }`,
    { slug },
  )
}
