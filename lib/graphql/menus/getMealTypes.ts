export const GET_PRODUCT_MEAL_TYPES_QUERY = `
  query GetProductMealTypes($handle: String!) {
    menu(handle: $handle) {
      items {
        id
        title
        url
        items {
          id
          title
          url
        }
      }
    }
  }
`;
