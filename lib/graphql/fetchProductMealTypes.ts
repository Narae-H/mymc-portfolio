export const FETCH_PRODUCT_MEAL_TYPES_QUERY = `
  {
    products(first: 100) {
      edges {
        node {
          title
          metafields(identifiers: [
            { namespace: "categories", key: "meal_type" },
            { namespace: "categories", key: "meal_subtype" }
          ]) {
            key
            value
          }
        }
      }
    }
  }
`;
