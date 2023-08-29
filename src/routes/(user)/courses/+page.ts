import axios from '$lib/axios/axios';
import type { SubjectResponse, UserResponse } from '$lib/custom-types';
import type { PageLoad } from './$types';

export const load = (async () => {
	const data = (await axios.get(`user`)).data;
	const user: UserResponse = data;
	let subjects: SubjectResponse[] = (await axios.get(`subjects?all=true`)).data;
	if (user.role.id === 3)
		subjects = subjects.filter(subject => subject.classroom.id === user.classroom?.id);
	else if (user.role.id === 2)
		subjects = subjects.filter(subject => subject.teacher.id === user.id);
	else subjects = [];

	return {
		subjects
	};
}) satisfies PageLoad;