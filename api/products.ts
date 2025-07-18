
import { GET_PRODUCTS_QUERY, GET_COLLECTION_WITH_PRODUCTS_QUERY } from '@/lib/graphql/products/index';
import { GET_PRODUCT_MEAL_TYPES_QUERY } from '@/lib/graphql/menus/index';

import { parseProduct } from '@/lib/parsers/parseProduct';
import { shopifyFetch } from '@/api/shopify';
import { MealType } from '@/models/meal';
import { FilterValues } from '@/models/filter';

interface FetchProductsParams {
  handle?: string;
  filters?: FilterValues;
  sortBy?: string;
  cursor?: string;
}

export async function fetchProducts(options: FetchProductsParams = {}) {
const { filters, sortBy, cursor, handle } = options;
  
  // TODO: 나중에 filter & sort 대비하여 만들어 놓음
  // const queryString = keyword
  // ? `metafield.namespace:meal AND metafield.key:type AND metafield.value:${keyword}`
  // : '';

  const variables = {
    first: 100,
    sortKey: sortBy,
    reverse: true,
    // query: filters ? `metafield.namespace:meal AND metafield.key:type AND metafield.value:${filters}` : undefined,
    cursor: cursor || undefined,
  };

  if ( handle ) {
    const data: any = await shopifyFetch(GET_COLLECTION_WITH_PRODUCTS_QUERY, {hdl: handle });
    return data.collection.products.edges.map((edge: any) => parseProduct(edge.node));

  } else {
    const data: any = await shopifyFetch(GET_PRODUCTS_QUERY, variables);
    return data.products.edges.map((edge: any) => parseProduct(edge.node));
  }

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
