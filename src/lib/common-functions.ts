import type { ClassroomRequest, DepartmentRequest, Search, Sort, SubjectRequest } from "./custom-types";
import { sortStore } from "./store/stores";

export const departmentValidator = (department: DepartmentRequest) => {
  return department.name.trim().length >= 3;
}

export const classroomValidator = (classroom: ClassroomRequest) => {
  return classroom.name.trim().length >= 3 && classroom.departmentId !== 0;
}

export const subjectValidator = (subject: SubjectRequest) => {
  return subject.name.trim().length >= 3 &&
    subject.classroomId !== 0 &&
    subject.teacherId !== 0 &&
    subject.multiplier !== 0 &&
    subject.credit !== 0;
}

export const numberFormat = (x: number) => {
  return x % parseInt(x.toString()) === 0 ? parseInt(x.toString()) : x;
}

export const sortBy = (field: string) => {
  sortStore.update(sort => {
    if (sort.field === field) {
      sort.field = sort.order !== "DESC" ? sort.field : "";
      sort.order = sort.order !== "DESC" ? "DESC" : "";
    }
    else {
      sort.field = field,
      sort.order = "ASC"
    }
    return sort;
  });
}

export class GetURL {
  private url: URL;

  constructor(url: string) {
    this.url = new URL(url);
  }

  public getUrlFromNumber(fieldName: string, condition: boolean, counter: number) {
    if (condition) {
      this.url.searchParams.set(fieldName, counter.toString());
    }
    else {
      this.url.searchParams.delete(fieldName);
    }

    return new GetURL(this.url.toString());
  }

  public getUrlFromSort(sort: Sort) {
    if (sort.field && sort.order) {
      this.url.searchParams.set("orderBy", sort.field);
      this.url.searchParams.set("ordering", sort.order);
    }
    return new GetURL(this.url.toString());
  }

  public getUrlFromSearch(search: Search) {
    if (search.keyword && search.field) {
      this.url.searchParams.set("search", search.keyword);
      this.url.searchParams.set("where", search.field);
    }
    return new GetURL(this.url.toString());
  }

  public getUrlFromKeyword(search: Search) {
    if (search.keyword) this.url.searchParams.set("search", search.keyword);
    return new GetURL(this.url.toString());
  }

  public toString() {
    return this.url.toString();
  }
}
