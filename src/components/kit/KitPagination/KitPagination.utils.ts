/**
 * Keeps a page inside the valid range.
 *
 * @param page Page asked for.
 * @param pages Number of pages.
 * @returns A page from 1 to `pages`.
 */
export function clampPage(page: number, pages: number): number {
  return Math.min(pages, Math.max(1, page));
}
