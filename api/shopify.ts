const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;

export async function shopifyFetch(query: string) {
  try {
    const response = await fetch(`https://${domain}/api/2023-07/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      },
      body: JSON.stringify({ query }),
    });
  
    if (!response.ok) {
      const errorText = await response.text().catch(() => response.statusText);
      throw new Error(`Request failed (${response.status}): please try again later.`);
    }
  
    const json = await response.json();
  
    if (json.errors) {
      console.error('Shopify errors:', json.errors);
      throw new Error('Data fetching error — something went wrong retrieving information.');
    }
  
    return json.data;

  } catch (err: any) {
    console.error('shopifyFetch error:', err);
    throw new Error('Network issue or unexpected error — please check your connection.');
  }
}
