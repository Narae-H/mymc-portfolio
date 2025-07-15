export const FETCH_COLLECTION_QUERY = `
  query GetCollection($hdl: String!) {
    collection(handle: $hdl) {
      id
      title
      products(first: 20) { edges { node { id title } } }
    }
  }
`