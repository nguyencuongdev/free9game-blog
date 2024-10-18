import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

/**
 * A utility function that combines clsx and tailwind-merge
 *
 * @param args Class values which can be a string, object, or array
 * @returns A merged and optimized Tailwind CSS class string
 */
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(...args));
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${day}-${month}-${year}`;
}
