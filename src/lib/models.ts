import type { Readable, Writable } from 'svelte/store';

export type User = {
	id: number;
	name: string;
	avatar: {
		large: string;
	};
	siteUrl: string;
};

/**
 * Type of the return value of the
 * load function in root's `+layout.ts`
 */
export type BaseLoadValue = {
	token: Writable<string | null>;
	isAuthed: Readable<boolean>;
	user: User | null;
};
