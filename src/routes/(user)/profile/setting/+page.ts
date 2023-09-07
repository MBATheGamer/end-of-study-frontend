import axios from '$lib/axios/axios';
import type { UserResponse } from '$lib/custom-types';
import type { PageLoad } from './$types';

export const load = (async () => {
	const user: UserResponse = (await axios.get(`user`)).data;

	return {
		user
	};
}) satisfies PageLoad;