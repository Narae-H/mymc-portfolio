export const GET_PRODUCTS_QUERY = `
  query GetProducts($first: Int = 100, $query: String, $cursor: String, $sortKey: ProductSortKeys, $reverse: Boolean) {
    products(first: $first, query: $query, after: $cursor, sortKey: $sortKey, reverse: $reverse) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
                weight
                weightUnit
              }
            }
          }
          metafields(identifiers: [
            { namespace: "nutrition", key: "calories" },
            { namespace: "nutrition", key: "protein" },
            { namespace: "nutrition", key: "carbs" },
            { namespace: "nutrition", key: "fat" },
            { namespace: "meal", key: "type" },
            { namespace: "details", key: "ingredients" },
            { namespace: "details", key: "nutritional_info" },
            { namespace: "details", key: "instructions" },
            { namespace: "filter", key: "protein_type" },
            { namespace: "filter", key: "preferences" },
            { namespace: "filter", key: "dietary" }
          ]) {
            namespace
            key
            value
          }
        }
      }
    }
  }
`;
