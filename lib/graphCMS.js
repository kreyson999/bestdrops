import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT;
const graphcms = new GraphQLClient(endpoint);
export const REVALIDATE_PAGE_CONTENT = 60 * 30;

export async function getHotDrops(limit, date) {
  const { products } = await graphcms.request(
    `
    query GetHotDrops($limit: Int!, $date: DateTime!) {
      products(where: {isHotDrop: true, date_gte: $date}, first: $limit, orderBy: date_ASC) {
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
  `,
    { limit, date }
  );
  return products;
}
export async function getAllDrops(limit, date) {
  const { products } = await graphcms.request(
    `
    query GetAllDrops($limit: Int!, $date: DateTime!) {
      products(where: {date_gte: $date, isHotDrop: false}, first: $limit, orderBy: date_ASC) {
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
  `,
    { limit, date }
  );
  return products;
}

export async function getDropsWithPagination(limit, date) {
  try {
    const { products } = await graphcms.request(
      `
      query GetAllDrops($limit: Int!, $date: DateTime!) {
        products(first: $limit, orderBy: date_DESC, where: {date_lte: $date}) {
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
    `,
      { limit, date }
    );
    return products;
  } catch (e) {
    throw Error(e);
  }
}

export async function getMatchingDrops(name) {
  try {
    const { products } = await graphcms.request(
      `
      query GetMatchingDrops($name: String!) {
        products(first: 25, orderBy: date_DESC, where: {name_contains: $name}) {
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
    `,
      { name }
    );
    return products;
  } catch (e) {
    throw Error(e);
  }
}

export async function getDropDetails(slug) {
  const { product } = await graphcms.request(
    `
    query getDropDetails($slug: String!) {
      product(where: {slug: $slug}) {
        featuredImage {
          url
        }
        dropPlace
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
  `,
    { slug }
  );
  return product;
}
