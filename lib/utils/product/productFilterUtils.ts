import { FilterValues } from "@/models/filter";
import { Product } from "@/models/product";

export function clientFiltersProducts (
  products: Product[], 
  filters: FilterValues
 ): Product[] {
   // TODO: Preferences, Dietary 필터 로직 짜야함
  return products.filter(product => {
    // Preferences
    
    // Protein Type
    if (filters.proteinType.length > 0) {
      const isMatch = filters.proteinType.some(fp => {
        return product.proteinType.includes(fp.toLowerCase())
      });
      if (!isMatch) return false;
    }
    
    // Carbs
    if (filters.carbs.length > 0) {
      const isMatch = filters.carbs.some(slug => {
        switch (slug) {
          case 'lt20g':
            return product.carbs < 20;
          case '20-40g':
            return product.carbs >= 20 && product.carbs <= 40;
          case 'gt40g':
            return product.carbs > 40;
          default:
            return false;
        }
      });
      if (!isMatch) return false;
    }
            
    // Calories
    if (filters.calories.length > 0) {
      const isMatch = filters.calories.some(slug => {
        switch (slug) {
          case 'lt400':
            return product.calories < 400;
            case '400-500':
            return product.calories >= 400 && product.calories <= 500;
          case 'gt500':
            return product.calories > 500;
          default:
            return false;
        }
      });
      if (!isMatch) return false;
    }

    // Dietary

    return true;
  });
}