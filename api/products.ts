
import { GET_PRODUCTS_QUERY, GET_COLLECTION_WITH_PRODUCTS_QUERY } from '@/lib/graphql/products/index';
import { GET_PRODUCT_MEAL_TYPES_QUERY } from '@/lib/graphql/menus/index';

import { parseProduct } from '@/lib/parsers/parseProduct';
import { shopifyFetch } from '@/api/shopify';
import { MealType } from '@/models/meal';
import { Product } from '@/models/product';

interface FetchProductsOptions {
  keyword?: string;
  cursor?: string;
}

export async function fetchProducts(options?: FetchProductsOptions) {
  const keyword = options?.keyword;
  const cursor = options?.cursor;
  
  // TODO: 나중에 filter & sort 대비하여 만들어 놓음
  const queryString = keyword
  ? `metafield.namespace:meal AND metafield.key:type AND metafield.value:${keyword}`
  : '';

  const variables = {
    first: 100,
    query: queryString || undefined,
    cursor: cursor || undefined
  };

  const data: any = await shopifyFetch(GET_PRODUCTS_QUERY, variables);
  const products: Product[] = data.products.edges.map((edge: any) => parseProduct(edge.node));

  return products;
}

export async function fetchProductMealTypesTree() {
  const data: any = await shopifyFetch(GET_PRODUCT_MEAL_TYPES_QUERY, {handle: 'sidebar-menu'});
  const mealTypes: MealType[] = data.menu.items.map( (item: any) => ({
                                                      id: item?.id,
                                                      title: item.title,
                                                      url: item.url,
                                                      items: item.items ?? []
                                                    }));

  return mealTypes;
}

export async function fetchCollectionWithProducts( options?: FetchProductsOptions ) {
  const data: any = await shopifyFetch(GET_COLLECTION_WITH_PRODUCTS_QUERY, {hdl: options?.keyword });
  const products: Product[] = data.collection.products.edges.map((edge: any) => parseProduct(edge.node));

  return products;
}

export async function fetchProductPreferences() {
  // TODO: 문제는 Preferences와 Dietary를 어떻게 구분할것인가..? 좀 더 생각해보자.
  // const data = await shopifyFetch(FETCH_PRODUCT_PREFERENCES_QUERY);
  // console.log(data);
  return "";
}