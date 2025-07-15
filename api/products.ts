
import { FETCH_PRODUCTS_QUERY } from '@/lib/graphql/fetchProducts';
import { FETCH_PRODUCT_MEAL_TYPES_QUERY } from '@/lib/graphql/fetchProductMealTypesTree';
import { FETCH_PRODUCT_PREFERENCES_QUERY } from '@/lib/graphql/fetchProductPreferences';

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
  const data = await shopifyFetch(FETCH_PRODUCT_MEAL_TYPES_QUERY, {handle: 'sidebar-menu'});
  // TODO: 1) sidebar-menu 데이터 정리하고 가져오기
  console.log(data);
  const rawMealTypes = extractMealTypesFromMetafields(data);
  
  
  return buildProductMealTypesTree(rawMealTypes);
}

export async function fetchProductPreferences() {
  // 문제는 Preferences와 Dietary를 어떻게 구분할것인가..? 좀 더 생각해보자.
  const data = await shopifyFetch(FETCH_PRODUCT_PREFERENCES_QUERY);
  console.log(data);
  return "";
}