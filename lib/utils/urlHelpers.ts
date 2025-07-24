import { DEFAULT_FILTER_VALUES, sortAndFilters } from "@/data/sortAndFilters";
import { FilterValues } from "@/models/filter";
import { isValidSortKey } from "./typeGuards";
import { SortKeyValues } from "@/data/sortConfig";

export function getLastPathSegment(url: string): string {
  const segments = url.split("/")
  return segments[segments.length - 1];
}

export function parseSortByFromParams (params: Record<string, string>): SortKeyValues  {
  return (isValidSortKey(params.sort)? 
    params.sort
    : DEFAULT_FILTER_VALUES.sort) as SortKeyValues;
}

export function parseFiltersFromParams (params: Record<string, string>): FilterValues  {
  const filterValues: Partial<FilterValues> = {};

  for( const filter of sortAndFilters ) {
    if( filter.paramKey === 'sort') continue;
    
    const value = params[filter.paramKey];
    filterValues[filter.paramKey as keyof FilterValues] = value? value.split(',') : [];
  }

  return filterValues as FilterValues;

}

export function autoParseQueryParams(
  searchParams: { [key: string]: string | string[] | undefined }
): Record<string, string | number | boolean | string[]> {
  const result: Record<string, string | number | boolean | string[]> = {};

  for (const key in searchParams) {
    const raw = searchParams[key];

    if (Array.isArray(raw)) {
      result[key] = raw;
    } else if (typeof raw === 'string') {
      if (raw === 'true') {
        result[key] = true;
      } else if (raw === 'false') {
        result[key] = false;
      } else if (!isNaN(Number(raw))) {
        result[key] = Number(raw);
      } else {
        result[key] = raw;
      }
    }
  }

  return result;
}
