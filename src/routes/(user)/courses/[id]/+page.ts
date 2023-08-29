import axios from '$lib/axios/axios';
import type { SubjectResponse } from '$lib/custom-types';
import type { PageLoad } from './$types';

export const load = (async ({params}) => {
	const subject: SubjectResponse = (await axios.get(`subjects/${params.id}`)).data;
	
	return {
		subject
	};
}) satisfies PageLoad;