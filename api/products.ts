
import { FETCH_PRODUCTS_QUERY } from '@/lib/graphql/fetchProducts';
import { FETCH_PRODUCT_MEAL_TYPES_QUERY } from '@/lib/graphql/fetchProductMealTypes';
import { extractMealTypesFromMetafields } from '@/lib/parsers/mealTypes';
import { parseProduct } from '@/lib/parsers/parseProduct';
import { buildProductMealTypesTree } from '@/lib/utils/buildMealTypeTree';
import { shopifyFetch } from '@/api/shopify';

export async function fetchProducts() {
  const data = await shopifyFetch(FETCH_PRODUCTS_QUERY);
  const products = data.products.edges.map((edge: any) => parseProduct(edge.node));
  const totalCount = products.length;
  return products;
}

export async function fetchProductMealTypesTree() {
  const data = await shopifyFetch(FETCH_PRODUCT_MEAL_TYPES_QUERY);
  const rawMealTypes = extractMealTypesFromMetafields(data);
  return buildProductMealTypesTree(rawMealTypes);
}