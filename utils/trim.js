export default function safeTrim(value) {
  if (typeof value !== 'string') return '';

  return value.trim();
}
