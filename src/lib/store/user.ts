import { derived, writable } from 'svelte/store';
import { storage } from '$lib/storage';

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

// const EMPTY_USER = {
// 	id: 0,
// 	name: 'Foo',
// 	avatar: {
// 		large: 'https://s4.anilist.co/file/anilistcdn/user/avatar/large/default.png'
// 	},
// 	siteUrl: 'https://anilist.co'
// };
