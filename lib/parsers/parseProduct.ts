import { Product } from '@/models/product';

export function parseProduct(raw: any): Product {
  const imageNode = raw.images.edges[0]?.node;
  const variantNode = raw.variants.edges[0]?.node;

  const metafieldsMap: Record<string, string> = {};
  raw.metafields?.forEach((field: any) => {
    metafieldsMap[`${field.namespace}.${field.key}`] = field.value;
  });

  let category = '';
  try {
    const parsed = JSON.parse(metafieldsMap['categories.meal_type'] || '{}');
    category = parsed.name.replace(/Meals/g, '')  || '';
  } catch (e) {
    console.warn('Invalid category metafield:', metafieldsMap['categories.meal_type']);
  }
  let categoryPrefix = (category.split(' ')[0] || '')
                        .replace(/[^a-zA-Z0-9]/g, '') 
                        .toLowerCase();   
                        
  return {
    id: raw.id,
    title: raw.title,
    description: raw.description,
    category: category,
    categoryPrefix: categoryPrefix,
    calories: Math.round(parseFloat(metafieldsMap['nutrition.calories'] || '0')),
    protein: Math.round(parseFloat(metafieldsMap['nutrition.protein'] || '0')),
    carbs: Math.round(parseFloat(metafieldsMap['nutrition.carbs'] || '0')),
    fat: Math.round(parseFloat(metafieldsMap['nutrition.fat'] || '0')),
    ingredients: metafieldsMap['details.ingredients'] || '',
    nutritional: metafieldsMap['details.nutritional_info'] || '',
    instructions: metafieldsMap['details.instructions'] || '',
    imageURL: raw.images.edges[0].node.url,
    imageAlt: imageNode?.altText || raw.title,
    price: variantNode?.price?.amount || 0.00,
    currency: variantNode?.price?.currencyCode || 'AUD'
  };
}
