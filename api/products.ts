import { GET_PRODUCT_MEAL_TYPES_QUERY } from '@/lib/graphql/menus/index';
import { GET_COLLECTION_WITH_PRODUCTS_QUERY, GET_PRODUCTS_QUERY } from '@/lib/graphql/products/index';

import { shopifyFetch } from '@/api/shopify';
import { COLLECTION_SORT_CONFIG, PRODUCT_SORT_CONFIG, SortKeyValues } from '@/data/sortConfig';
import { parseProduct } from '@/lib/parsers/parseProduct';
import { isShopifyCollectionSortKey, isShopifyProductSortKey } from '@/lib/utils/typeGuards';
import { FilterValues } from '@/models/filter';
import { MealType } from '@/models/meal';
import { Product } from '@/models/product';

interface FetchProductsParams {
  handle?: string;
  filters?: FilterValues;
  sortBy?: SortKeyValues;
  cursor?: string;
}

export async function fetchProducts(options: FetchProductsParams = {}) {
  const { sortBy, cursor, handle } = options;

  const productSortConfig = sortBy && isShopifyProductSortKey(sortBy) ? PRODUCT_SORT_CONFIG[sortBy] : undefined;
  const collectionSortConfig = sortBy && isShopifyCollectionSortKey(sortBy) ? COLLECTION_SORT_CONFIG[sortBy] : undefined;
  
  const commonVariables = {
    first: 100,
    cursor: cursor || undefined,
  };
  
  let products: Product[] = [];
  if ( handle ) {
    const variables = {
      ...commonVariables,
      hdl: handle,
      sortKey: collectionSortConfig?.sortKey,
      reverse: collectionSortConfig?.reverse
    };
    
    const data: any = await shopifyFetch(GET_COLLECTION_WITH_PRODUCTS_QUERY, variables);
    products =  data.collection.products.edges.map((edge: any) => parseProduct(edge.node));
    
  } else {
    const variables = {
      ...commonVariables,
      sortKey: productSortConfig?.sortKey,
      reverse: productSortConfig?.reverse
    };
    const data: any = await shopifyFetch(GET_PRODUCTS_QUERY, variables);
    products =  data.products.edges.map((edge: any) => parseProduct(edge.node));
  }

  return {
    products
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
