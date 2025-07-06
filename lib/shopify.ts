import { FETCH_PRODUCTS_QUERY } from './queries/fetchProducts';
import { FETCH_MEAL_TYPES_QUERY } from './queries/fetchMealTypes'
import { parseMealTypesFromMetafields } from './parsers/mealTypes';
import { buildMealTypeTree } from './utils/buildMealTypeTree';
import { parseProduct } from './parsers/parseProduct';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;

async function shopifyFetch(query: string) {
  const response = await fetch(`https://${domain}/api/2023-07/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch from Shopify');
  }

  return json.data;
}

export async function fetchProducts() {
  const data = await shopifyFetch(FETCH_PRODUCTS_QUERY);
  const products = data.products.edges.map((edge: any) => parseProduct(edge.node));
  const totalCount = products.length;
  return products;
}

export async function fetchMealTypeTree() {
  const data = await shopifyFetch(FETCH_MEAL_TYPES_QUERY);
  const rawMealTypes = parseMealTypesFromMetafields(data);
  return buildMealTypeTree(rawMealTypes);
}