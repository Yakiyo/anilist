import { writable } from "svelte/store";

export type AnilistUser = {
	token: string;
	id: string;
	username: string;
	avatar: string;
};

function getLoggedUser() {
	const token = localStorage.getItem('token');
	let cachedJson = localStorage.getItem('userId');
    // If theres no token, it means, theres no user logged in.
    // So return null
	if (!token) return null;

	if (!cachedJson) {
		// TODO: fetch user info from AL api
		cachedJson = `{
            "id": "763771",
            "username": "Yakiyo",
            "avatar": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b763771-rOG6N4d3P5lq.png"
        }`;
	}
	const cachedUser = JSON.parse(cachedJson) as AnilistUser;
	cachedUser.token = token;

	return writable(cachedUser);
}

/**
 * The currently logged user
 * or null, if none is logged in
 */
export const user = getLoggedUser();
