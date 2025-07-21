import { GET_PRODUCT_MEAL_TYPES_QUERY } from '@/lib/graphql/menus/index';
import { GET_COLLECTION_WITH_PRODUCTS_QUERY, GET_PRODUCTS_QUERY } from '@/lib/graphql/products/index';

import { shopifyFetch } from '@/api/shopify';
import { SHOPIFY_SORT_CONFIG, ValidSortKey } from '@/data/sortConfig';
import { parseProduct } from '@/lib/parsers/parseProduct';
import { buildQuery } from '@/lib/utils/buildQuery';
import { FilterValues } from '@/models/filter';
import { MealType } from '@/models/meal';
import { Product } from '@/models/product';
import { isShopifySortKey } from '@/lib/utils/typeGuards';

interface FetchProductsParams {
  handle?: string;
  filters?: FilterValues;
  sortBy?: ValidSortKey;
  cursor?: string;
}

export async function fetchProducts(options: FetchProductsParams = {}) {
  const { filters, sortBy, cursor, handle } = options;
  
  const shopifySortConfig =
  sortBy && isShopifySortKey(sortBy)
    ? SHOPIFY_SORT_CONFIG[sortBy]
    : undefined;

  const useShopifySort = !!shopifySortConfig;
  
  const variables = {
    first: 100,
    query: buildQuery(filters),
    cursor: cursor || undefined,
    sortKey: useShopifySort ? shopifySortConfig?.sortKey : undefined,
    reverse: useShopifySort ? shopifySortConfig?.reverse : undefined
  };

  let products: Product[] = [];
  if ( handle ) {
    const data: any = await shopifyFetch(GET_COLLECTION_WITH_PRODUCTS_QUERY, {hdl: handle });
    products =  data.collection.products.edges.map((edge: any) => parseProduct(edge.node));
    
  } else {
    const data: any = await shopifyFetch(GET_PRODUCTS_QUERY, variables);
    products =  data.products.edges.map((edge: any) => parseProduct(edge.node));
  }

  return {
    products,
    needsClientSort: !useShopifySort && !!sortBy,
    sortBy
  };
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
