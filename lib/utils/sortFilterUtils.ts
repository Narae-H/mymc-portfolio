import { sortAndFilters } from '@/data/sortAndFilters';

export function getLabelBySlug(key: string, slug: string = ''): string | undefined {
  const group = sortAndFilters.find(item => item.key === key);
  return group?.options.find(opt => opt.slug === slug)?.label;
}

export function getSlugByLabel(key: string, label: string): string | undefined {
  const group = sortAndFilters.find(item => item.key === key);
  return group?.options.find(opt => opt.label === label)?.slug;
}
