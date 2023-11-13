/**
 * Generate current page's title based on pathname
 * @param pathname current route's path
 * @returns string
 */
export function pageTitle(pathname: string): string {
	let path = pathname;
	if (path === '/') return 'Anilist';
	path = path.substring(1);
	path = path.charAt(0).toUpperCase() + path.substring(1);
	return `${path} · Anilist`;
}
