import axios from '$lib/axios/axios';
import type { PageLoad } from './$types';

export const load = (async () => {
	const departments = (await axios.get("departments?all=true")).data;

	return {
		departments
	};
}) satisfies PageLoad;