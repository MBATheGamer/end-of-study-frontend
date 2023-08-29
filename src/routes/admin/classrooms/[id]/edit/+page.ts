import axios from '$lib/axios/axios';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	let id = params.id;

	const classroom = (await axios.get(`classrooms/${id}`)).data;
	const departments = (await axios.get("departments?all=true")).data;

	return {
		id,
		classroom,
		departments
	};
}) satisfies PageLoad;