import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  apiVersion: '2025-10',
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
});

export async function shopifyFetch(
  query: string,
  variables?: Record<string, any>
) {
  const { data, errors } = await client.request(query, { variables });

  if (errors) {
    console.error('Shopify errors:', errors);
    throw new Error('Shopify GraphQL error');
  }

  return data;
}