/**
 * Summary of a contrast report.
 *
 * @param passed Pairs that pass.
 * @param total Pairs checked.
 * @returns The sentence, e.g. "12 de 12 pares pasan".
 */
export function scoreLabel(passed: number, total: number): string {
  return `${passed} de ${total} pares pasan`;
}
