export function parseSave(encoded: any): any {
  if (!encoded) {
    return {}
  }
  if (typeof encoded != 'string') {
    return encoded
  }
  try {
    return JSON.parse(encoded)
  } catch (invalidJson) {
    return {}
  }
}