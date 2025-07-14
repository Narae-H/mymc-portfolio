export const FETCH_PRODUCT_PREFERENCES_QUERY = `
{
  products(first: 100) {
    edges {
      node {
        id
        title
        tags
      }
    }
  }
}
`;