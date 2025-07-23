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
  proteinType: string[];
  preferences: string[];
  dietary: string[];
}

export const EmptyProductValue: Product = {
  id: '',
  title: '',
  category: '',
  categoryPrefix: '',
  calories: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
  ingredients: '',
  nutritional: '',
  instructions: '',
  description: '',
  imageURL: '',
  imageAlt: '',
  price: 0,
  currency: '',
  proteinType: [],
  preferences: [],
  dietary: []
}

export interface ProductWithMetafields extends Product {
  metafields: Metafield[];
}