import axios from '$lib/axios/axios';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	let id = params.id;

	const department = (await axios.get(`departments/${id}`)).data;

	return {
		id,
		department
	};
}) satisfies PageLoad;