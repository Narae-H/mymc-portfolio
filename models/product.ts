export interface ProductImage {
  node : {
    url: string;
    altText: string | null;
  }
}

export interface Variant {
  node: {
    price: {
      amount: string;
      currencyCode: string;
    };
  }
}

export interface Product {
  id: string;
  title: string;
  category: string;
  categoryPrefix: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string;
  nutritional: string;
  instructions: string;
  description: string;
  imageURL: string;
  imageAlt: string;
  price: number;
  currency: string;
  variants: { edges: Variant[]};
}