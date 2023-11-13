import type { Load } from '@sveltejs/kit';
import { token, isAuthed, fetchUser } from '$lib/store/';
import { writable, readable, type Writable, type Readable } from 'svelte/store';
import type { User } from '$lib/models';

export const ssr = false;

export const load: Load = async (): Promise<{
	token: Writable<string | null>;
	isAuthed: Readable<boolean>;
	user: User | null;
}> => {
	if (import.meta.env.SSR)
		return {
			token: writable(null),
			isAuthed: readable(false),
			user: null
		};
	return {
		token,
		isAuthed,
		user: await fetchUser()
	};
};
