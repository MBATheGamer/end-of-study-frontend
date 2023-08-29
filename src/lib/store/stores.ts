import type { Search, Sort, SubjectResponse, UserResponse } from "$lib/custom-types";
import { writable } from "svelte/store";

export const authenticated = writable(true);
export const administrator = writable(false);

// CRUD stores
export const pageStore = writable(1);
export const sortStore = writable<Sort>({ field: "", order: "" });
export const limitStore = writable(10);
export const searchStore = writable<Search>({ keyword: "", field: "" });

// user Stores
export const userStore = writable<UserResponse>();
export const roleIdStore = writable(0);

// department Stores

// classroom Stores

// subject Stores
export const subjectStore = writable<SubjectResponse>();
