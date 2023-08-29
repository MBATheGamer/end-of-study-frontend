import axios from '$lib/axios/axios';
import type { PageLoad } from './$types';

export const load = (async () => {
	const roles = (await axios.get("roles")).data;
	const classrooms = (await axios.get("classrooms?all=true")).data;

	return {
		roles,
		classrooms
	};
}) satisfies PageLoad;