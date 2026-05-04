import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const truncate = (text: string, max = 160) =>
  text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;
