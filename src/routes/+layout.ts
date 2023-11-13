import type { Load } from '@sveltejs/kit';

export const ssr = false;

export const load: Load = async () => {
	if (import.meta.env.SSR) return;
	const token = localStorage.getItem('token');
	if (!token)
		return {
			isAuthed: false
		};
	return {
		token,
		isAuthed: true
	};
};
