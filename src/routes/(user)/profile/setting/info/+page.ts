import axios from '$lib/axios/axios';
import type { User } from '$lib/interface/user';
import type { PageLoad } from './$types';

export const load = (async () => {
	const user: User = (await axios.get(`user`)).data;
	const roles = (await axios.get("roles")).data;

	return {
		user,
		roles
	};
}) satisfies PageLoad;