import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT)
export const REVALIDATE_PAGE_CONTENT = 60 * 30

export async function getTopDrop() {
  const { products } = await graphcms.request(`
    query getTopDrop {
      products(where: {isTopDrop: true}) {
        slug
        resell
        retail
        name
        date
        featuredImage {
          url
        }
      }
    }
  `)
  return products[0]
}
export async function getHotDrops(limit) {
  const { products } = await graphcms.request(`
    query GetHotDrops($limit: Int!) {
      products(where: {isHotDrop: true, isTopDrop: false,}, first: $limit) {
        slug
        resell
        retail
        name
        date
        featuredImage {
          url
        }
      }
    }
  `, { limit: limit })
  return products
}
export async function getAllDrops(limit) {
  const { products } = await graphcms.request(`
    query GetAllDrops($limit: Int!) {
      products(where: {isHotDrop: false, isTopDrop: false,}, first: $limit) {
        slug
        resell
        retail
        name
        date
        featuredImage {
          url
        }
      }
    }
  `, { limit: limit })
  return products
}
export async function getDropDetails(slug) {
  const { product } = await graphcms.request(`
    query getDropDetails($slug: String!) {
      product(where: {slug: $slug}) {
        featuredImage {
          url
        }
        description
        date
        linkToDrop
        linkToGoat
        linkToStockX
        name
        resell
        retail
      }
    }
  `, { slug: slug })
  return product
}