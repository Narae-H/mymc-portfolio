export interface RawMealType {
  mealType: string;
  subMealType?: string;
}

export interface MealTypeNode {
  mealType: string;
  subMealTypes: string[];
}

