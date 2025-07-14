export const FETCH_PRODUCTS_QUERY = `
  {
    products(first: 100) {
      edges {
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
              }
            }
          }
          metafields(identifiers: [
            { namespace: "nutrition", key: "calories" },
            { namespace: "nutrition", key: "protein" },
            { namespace: "nutrition", key: "carbs" },
            { namespace: "nutrition", key: "fat" },
            { namespace: "categories", key: "meal_type" },
            { namespace: "details", key: "ingredients" },
            { namespace: "details", key: "nutritional_info" },
            { namespace: "details", key: "instructions" }
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
