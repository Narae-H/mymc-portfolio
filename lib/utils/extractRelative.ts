export function extractRelative(url: string): string {
  try {
    return new URL(url).pathname;
  } catch {
    return url;  
  }
}