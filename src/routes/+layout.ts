import type { Load } from '@sveltejs/kit';
import { token, isAuthed, fetchUser } from '$lib/store/';
import { writable, readable } from 'svelte/store';
import type { BaseLoadValue } from '$lib/models';

export const ssr = false;

export const load: Load = async (): Promise<BaseLoadValue> => {
	if (import.meta.env.SSR)
		return {
			token: writable(null),
			isAuthed: readable(false),
			user: null,
		};
	return {
		token,
		isAuthed,
		user: await fetchUser(),
	};
};
