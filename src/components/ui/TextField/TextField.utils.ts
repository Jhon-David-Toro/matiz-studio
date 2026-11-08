/**
 * Id of the message under a field, when there is one to point at.
 *
 * @param id Id of the field.
 * @param message Hint or error shown under the field.
 * @returns The id of the message, or `undefined` when nothing is shown.
 */
export function messageId(id: string, message?: string): string | undefined {
  return message ? `${id}-message` : undefined;
}
