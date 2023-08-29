import axios from '$lib/axios/axios';
import type { PageLoad } from './$types';

export const load = (async () => {
	const classrooms = (await axios.get("classrooms?all=true")).data;
	const teachers = (await axios.get("users?role=teacher")).data;

	return {
		classrooms,
		teachers
	};
}) satisfies PageLoad;