import { RawMealType, MealTypeNode } from '@/models/meal';

export function buildProductMealTypesTree(rawMealTypes: RawMealType[]): MealTypeNode[] {

  const lookup = new Map<string, MealTypeNode>();
  const childSet = new Set<string>();

  for (const { mealType, subMealType } of rawMealTypes) {
    if (!lookup.has(mealType)) {
      lookup.set(mealType, { mealType, subMealTypes: [] });
    }

    if (subMealType) {
      childSet.add(subMealType);

      const node = lookup.get(mealType)!;
      if (!node.subMealTypes.includes(subMealType)) {
        node.subMealTypes.push(subMealType);
      }
    }
  }

  return Array.from(lookup.values())
    .filter(node => !childSet.has(node.mealType));
}
