/** Join truthy class names. */
export function cn(...classes) {
  return classes.flat().filter(Boolean).join(' ');
}
