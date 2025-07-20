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
