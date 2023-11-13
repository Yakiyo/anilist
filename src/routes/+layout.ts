import type { Load } from '@sveltejs/kit';
import { token, isAuthed } from '$lib/store/';

export const ssr = false;

export const load: Load = async () => {
	if (import.meta.env.SSR) return;
	return {
		token,
		isAuthed
	};
};
