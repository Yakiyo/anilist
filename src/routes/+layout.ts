import type { Load } from '@sveltejs/kit';
import { token, isAuthed } from '$lib/store/';
import { writable, readable } from 'svelte/store';

export const ssr = false;

export const load: Load = async () => {
	if (import.meta.env.SSR) return {
		token: writable(null),
		isAuthed: readable(false),
	};
	return {
		token,
		isAuthed
	};
};
