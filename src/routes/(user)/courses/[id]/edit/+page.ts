import axios from '$lib/axios/axios';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	let id = params.id;

	const subject = (await axios.get(`subjects/${id}`)).data;
	const classrooms = (await axios.get("classrooms?all=true")).data;
	const teachers = (await axios.get("users?role=teacher")).data;

	return {
		id,
		subject,
		classrooms,
		teachers
	};
}) satisfies PageLoad;
