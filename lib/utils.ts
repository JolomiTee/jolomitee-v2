import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const sessionStorageProvider = {
	getItem: (name: string) => {
		const storedValue = sessionStorage.getItem(name);
		return storedValue ? JSON.parse(storedValue) : undefined;
	},
	setItem: (name: string, value: any) => {
		sessionStorage.setItem(name, JSON.stringify(value));
	},
	removeItem: (name: string) => {
		sessionStorage.removeItem(name);
	},
};
