/**
 * Copies text to the clipboard.
 *
 * @param text Text to copy.
 * @returns True when the browser copied it.
 */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Saves text as a file through the browser's download.
 *
 * @param filename Name of the file.
 * @param text Contents of the file.
 * @param type MIME type of the file.
 */
export function downloadText(filename: string, text: string, type: string): void {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const link = Object.assign(document.createElement("a"), { href: url, download: filename });
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * Replaces the query string of the address without a navigation or a new history entry.
 *
 * @param query Query string without `?`.
 */
export function replaceQuery(query: string): void {
  const next = `${window.location.pathname}?${query}`;
  if (next !== `${window.location.pathname}${window.location.search}`) window.history.replaceState(null, "", next);
}

/**
 * Address of the current page with a query string, to share.
 *
 * @param query Query string without `?`.
 * @returns The full URL.
 */
export function shareUrl(query: string): string {
  return `${window.location.origin}${window.location.pathname}?${query}`;
}
