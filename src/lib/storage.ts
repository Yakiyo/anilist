const isSSR = () => import.meta.env.SSR;

/**
 * A wrapper over local storage
 */
export const storage = {
	get: (key: string) => {
		if (isSSR()) return null;
		return localStorage.getItem(key);
	},
	set: (key: string, value: string) => {
		if (isSSR()) return;
		return localStorage.setItem(key, value);
	}
};
