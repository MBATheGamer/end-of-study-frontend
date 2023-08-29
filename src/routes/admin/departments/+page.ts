import type { PageLoad } from './$types';
import axios from "$lib/axios/axios";
import type { DepartmentResponse } from '$lib/custom-types';
import { baseUrl } from '$main/lib/consts';

export const load = (async ({ fetch, url }) => {
	const fetchUrl = new URL(`${baseUrl}/departments`);
	fetchUrl.searchParams.set("page", url.searchParams.get("page") || "1");

	fetchUrl.searchParams.set("limit", url.searchParams.get("limit") || "10");

	if (url.searchParams.get("orderBy") && url.searchParams.get("ordering")) {
		fetchUrl.searchParams.set("orderBy", url.searchParams.get("orderBy") as string);
		fetchUrl.searchParams.set("ordering", url.searchParams.get("ordering") as string);
	}

	if (url.searchParams.get("search") && url.searchParams.get("where")) {
		fetchUrl.searchParams.set("search", url.searchParams.get("search") as string);
		fetchUrl.searchParams.set("where", url.searchParams.get("where") as string);
	}

	const { data } = await (await fetch(fetchUrl, {credentials: 'include'})).json();
  const departments: DepartmentResponse[] = data;

	return {
		departments
	};
}) satisfies PageLoad;