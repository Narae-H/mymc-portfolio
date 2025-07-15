export const FETCH_PRODUCT_MEAL_TYPES_QUERY = `
query GetMenu($handle: String!) {
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
