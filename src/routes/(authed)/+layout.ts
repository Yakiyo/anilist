import type { BaseLoadValue } from '$lib/models';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from '../$types';
import { get } from 'svelte/store';

// If user not authenticated, redirect them to root
export const load: LayoutLoad = async ({ parent }) => {
	const data = (await parent()) as BaseLoadValue;
	if (!get(data.isAuthed)) {
		throw redirect(303, '/');
	}
	return data;
};
