
import { FETCH_PRODUCTS_QUERY } from '@/lib/graphql/fetchProducts';
import { FETCH_PRODUCT_MEAL_TYPES_QUERY } from '@/lib/graphql/fetchProductMealTypesTree';
import { FETCH_PRODUCT_PREFERENCES_QUERY } from '@/lib/graphql/fetchProductPreferences';

import { parseProduct } from '@/lib/parsers/parseProduct';
import { shopifyFetch } from '@/api/shopify';
import { MealType } from '@/models/meal';

export async function fetchProducts() {
  const data = await shopifyFetch(FETCH_PRODUCTS_QUERY);
  console.log(data);
  const products = data.products.edges.map((edge: any) => parseProduct(edge.node));
  const totalCount = products.length;

  return products;
}

export async function fetchProductMealTypesTree() {
  const data = await shopifyFetch(FETCH_PRODUCT_MEAL_TYPES_QUERY, {handle: 'sidebar-menu'});
  const mealTypes = data.menu.items as MealType[];

  return mealTypes;
}

export async function fetchProductPreferences() {
  // TODO: 문제는 Preferences와 Dietary를 어떻게 구분할것인가..? 좀 더 생각해보자.
  const data = await shopifyFetch(FETCH_PRODUCT_PREFERENCES_QUERY);
  console.log(data);
  return "";
}