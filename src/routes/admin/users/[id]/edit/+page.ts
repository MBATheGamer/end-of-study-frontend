import axios from '$lib/axios/axios';
import type { UserResponse } from '$lib/custom-types';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	let id = params.id;

	const user: UserResponse = (await axios.get(`users/${id}`)).data;
	const roles = (await axios.get("roles")).data;
	const classrooms = (await axios.get("classrooms?all=true")).data;

	return {
		id,
		user: user,
		roles,
		classrooms
	};
}) satisfies PageLoad;