import { Metafield } from "@/models/metafield";

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
}

export interface ProductWithMetafields extends Product {
  metafields: Metafield[];
}