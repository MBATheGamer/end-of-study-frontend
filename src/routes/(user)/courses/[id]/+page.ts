import axios from '$lib/axios/axios';
import type { PostRequest, PostResponse, SubjectResponse } from '$lib/custom-types';
import type { PageLoad } from './$types';

export const prerender = false;

export const load = (async ({params}) => {
	const subject: SubjectResponse = (await axios.get(`subjects/${params.id}`)).data;
	const posts: PostResponse[] = (await axios.get(`posts?subjectId=${params.id}`)).data;
	
	return {
		subject,
		posts
	};
}) satisfies PageLoad;
