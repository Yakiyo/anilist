import { derived, get, writable } from 'svelte/store';
import { storage } from '$lib/storage';
import type { User } from '$lib/models';

/**
 * User token
 */
export const token = writable<string | null>(
	(() => {
		if (import.meta.env.SSR) return null;
		return storage.get('token');
	})()
);
/**
 * Wether any user is currently logged in or not
 */
export const isAuthed = derived(token, (token) => !!token);

let user: User | null = null;

export async function fetchUser(): Promise<User | null> {
	if (!get(token)) return null;
	if (!user) {
		// If user is null, fetch the user from the api.
		// for now, we just add a placeholder
		user = {
			id: 0,
			name: 'Foo',
			avatar: {
				large: 'https://s4.anilist.co/file/anilistcdn/user/avatar/large/default.png'
			},
			siteUrl: 'https://anilist.co'
		};
	}

	return user;
}
