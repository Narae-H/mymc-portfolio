import { FilterValues } from "@/models/filter";

export function buildQuery(filters: Partial<FilterValues> = {}): string {
  let query = '';


  Object.entries(filters ?? {}).forEach(([key, values]) => {
    if (key !== 'metafieldSort' && Array.isArray(values)) {
      values.forEach((value) => {
        query += `metafield.namespace:${key} AND metafield.key:${value} `;
      });
    }
  });

  return query.trim();
}
