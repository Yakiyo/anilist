import type { Load } from '@sveltejs/kit';
import { token, isAuthed, fetchUser } from '$lib/store/';
import type { BaseLoadValue } from '$lib/models';

export const prerender = true;

export const load: Load = async (): Promise<BaseLoadValue> => {
	return {
		token,
		isAuthed,
		user: await fetchUser(),
	};
};
