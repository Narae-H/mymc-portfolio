import { RawMealType, MealTypeNode } from '@/models/meal';

export function buildMealTypeTree(data: RawMealType[]): MealTypeNode[] {
  const root: MealTypeNode[] = [];
  const lookup = new Map<string, MealTypeNode>();

  for (const item of data) {
    const { mealType, subMealType } = item;

    if (!lookup.has(mealType)) {
      const node: MealTypeNode = { mealType, subMealType: [] };
      lookup.set(mealType, node);
    }

    if (subMealType) {
      if (!lookup.has(mealType)) {
        const parentNode: MealTypeNode = { mealType: mealType, subMealType: [] };
        lookup.set(mealType, parentNode);
      }

      const parentNode = lookup.get(mealType)!;
      if (!parentNode.subMealType.includes(subMealType)) {
        parentNode.subMealType.push(subMealType);
      }
    }
  }

  const childSet = new Set<string>();
  for (const node of lookup.values()) {
    for (const child of node.subMealType) {
      childSet.add(child);
    }
  }

  for (const [mealType, node] of lookup.entries()) {
    if (!childSet.has(mealType)) {
      root.push(node);
    }
  }

  return root;
}
