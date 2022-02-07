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
        isVerified
        featuredImage {
          url
        }
      }
    }
  `)
  return products[0]
}
export async function getHotDrops(limit, date) {
  const { products } = await graphcms.request(`
    query GetHotDrops($limit: Int!, $date: DateTime!) {
      products(where: {isHotDrop: true, isTopDrop: false, date_gte: $date}, first: $limit, orderBy: date_ASC) {
        slug
        resell
        retail
        name
        date
        isVerified
        featuredImage {
          url
        }
      }
    }
  `, { limit: limit, date: date })
  return products
}
export async function getAllDrops(limit, date) {
  const { products } = await graphcms.request(`
    query GetAllDrops($limit: Int!, $date: DateTime!) {
      products(where: {date_gte: $date, isHotDrop: false, isTopDrop: false}, first: $limit, orderBy: date_ASC) {
        slug
        resell
        retail
        name
        date
        isVerified
        featuredImage {
          url
        }
      }
    }
  `, { limit: limit, date: date })
  return products
}

export async function getDropsWithPagination(limit) {   
  try {
    const { products } = await graphcms.request(`
      query GetAllDrops($limit: Int!) {
        products(first: $limit, orderBy: date_DESC) {
          slug
          resell
          retail
          name
          date
          isVerified
          featuredImage {
            url
          }
        }
      }
    `, { limit: limit })
    return products
  } catch(e) {
    throw Error(e)
  }
}

export async function getDropDetails(slug) {
  const { product } = await graphcms.request(`
    query getDropDetails($slug: String!) {
      product(where: {slug: $slug}) {
        featuredImage {
          url
        }
        isVerified
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

export async function getAllArticles(limit) {
  const { articles } = await graphcms.request(`
    query getArticles($limit: Int!) {
      articles(first: $limit, orderBy: publishedAt_ASC) {
        category {
          title
        }
        featuredImage {
          url
        }
        publishedAt
        slug
        title
      }
    }
  `, { limit: limit})
  return articles
}

export async function getArticleDetails(slug) {
  const { article } = await graphcms.request(`
    query MyQuery($slug: String!) {
      article(where: {slug: $slug}) {
        category {
          title
        }
        content {
          raw
        }
        publishedAt
        slug
        title
        featuredImage {
          url
        }
      }
    }
  `, { limit: limit, slug: slug })
  return article
}

