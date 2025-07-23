import { Product, EmptyProductValue } from '@/models/product';

const safeParseNumber = (value?: string, defaultValue = 0): number => {
  const n = parseFloat(value || '');
  return isNaN(n) ? defaultValue : n;
};

const parseList = (value?: string | string[]): string[] => {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.map(s => s.toLowerCase());
  }

  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) {
      return parsed.map((s: any) => String(s).toLowerCase().replaceAll(" ", "-"));
    }
  } catch {
    return value.split(',').map(s => s.trim().toLowerCase().replaceAll(" ", "-"));
  }

  return [];
};

export function parseProduct(raw: any): Product {
  const imageNode = raw.images.edges[0]?.node;
  const variantNode = raw.variants.edges[0]?.node;

  const metafieldsMap: Record<string, string | string[]> = {};
  if (Array.isArray(raw.metafields)) {
    raw.metafields.forEach((field: any) => {
      if (!field || !field.namespace || !field.key) return;
      metafieldsMap[`${field.namespace}.${field.key}`] = field.value;
    });
  }

  const category: string = (metafieldsMap['meal.type'] as string) || '';
  const categoryPrefix: string =
    typeof category === 'string'
      ? (category.split(' ')[0] || '').replace(/[+]/g, '').toLowerCase()
      : '';

  const product: Product = { ...EmptyProductValue };

  product.id = raw.id || '';
  product.title = raw.title || '';
  product.description = raw.description || '';
  product.category = category;
  product.categoryPrefix = categoryPrefix;
  product.calories = Math.round(safeParseNumber(metafieldsMap['nutrition.calories'] as string));
  product.protein = Math.round(safeParseNumber(metafieldsMap['nutrition.protein'] as string));
  product.carbs = Math.round(safeParseNumber(metafieldsMap['nutrition.carbs'] as string));
  product.fat = Math.round(safeParseNumber(metafieldsMap['nutrition.fat'] as string));
  product.ingredients = (metafieldsMap['details.ingredients'] as string) || '';
  product.nutritional = (metafieldsMap['details.nutritional_info'] as string) || '';
  product.instructions = (metafieldsMap['details.instructions'] as string) || '';
  product.imageURL = imageNode?.url || '';
  product.imageAlt = imageNode?.altText || raw.title || '';
  product.price = safeParseNumber(variantNode?.price?.amount);
  product.currency = variantNode?.price?.currencyCode || 'AUD';
  product.proteinType = parseList(metafieldsMap['filter.protein_type']);
  product.preferences = [
    ...(parseList(metafieldsMap['filter.preferences'])),
    ...(product.calories < 400? ['low-calorie'] : [] ),
    ...(product.carbs < 20? ['low-calorie'] : [] ),
    ...(product.protein >= 20? ['muscle-building'] : [] )
  ];
  product.dietary = parseList(metafieldsMap['filter.dietary']);

  return product;
}