import { isAuthed } from '$lib/store';
import { get } from 'svelte/store';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = () => {
	// dont redirect on dev, it stops me from testing stuff
	if (import.meta.env.DEV) return;
	// if user is authenticated, then redirect them to
	// home, this is how anilist does it
	if (get(isAuthed)) {
		throw redirect(303, '/home');
	}
};
