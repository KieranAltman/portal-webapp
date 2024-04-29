import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatString(str?: string, prefix = 6, suffix = prefix) {
  return str ? str.slice(0, prefix) + "..." + str.slice(-1 * suffix) : "";
}
