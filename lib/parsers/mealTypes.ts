import { RawMealType } from "@/models/meal";

export function parseMealTypesFromMetafields(data: any): RawMealType[] {
  const rawList: RawMealType[] = [];

  data.products.edges.forEach((edge: any) => {
    const metafields = edge.node.metafields;

    metafields.forEach((m: any) => {
      if (!m || !m.value) return;

      try {
        const parsed = JSON.parse(m.value);
        if (m.key === 'meal_type') {
          rawList.push({ mealType: parsed.name });
        }

        if (m.key === 'meal_subtype') {
          rawList.push({ mealType: parsed.parent, subMealType: parsed.name });
        }
      } catch (e) {
        console.warn('Failed to parse metafield value:', m);
      }
    });
  });
  return rawList;
}
