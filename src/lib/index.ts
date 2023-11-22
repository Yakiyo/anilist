import type { themes } from './models';
import { storage } from './storage';
import { capitalize } from './util';

/**
 * Generate current page's title based on pathname
 * @param pathname current route's path
 * @returns string
 */
export function pageTitle(pathname: string): string {
	let path = pathname;
	if (path === '/') return 'Anilist: Track, Discover, Share Anime and Manga';
	path = capitalize(path.substring(1));
	return `${path} · Anilist`;
}

/**
 * sets current theme
 * @param theme the theme to set
 */
export function setTheme(theme: themes): void {
	let chosen = theme;
	storage.set('theme', theme);
	if (theme == 'sys') {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) chosen = 'dark';
		else chosen = 'default';
	}
	console.log('here', chosen, theme);
	if (chosen === 'dark') {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
}

export function savedTheme(): themes {
	return (storage.get('theme') ?? 'default') as themes;
}

export * from './util';
