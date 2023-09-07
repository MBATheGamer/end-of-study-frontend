export type RoleResponse = {
  id: number;
  name: string;
}

export type DepartmentRequest = {
  name: string;
  description?: string;
}

export type DepartmentResponse = {
  id: number;
  name: string;
  description?: string;
}

export type ClassroomRequest = {
  name: string;
  description?: string;
  departmentId: number;
}

export type ClassroomResponse = {
  id: number;
  name: string;
  description?: string;
  department: DepartmentResponse;
}

export type SubjectRequest = {
  name: string;
  description?: string;
  multiplier: number;
  credit: number;
  isOnMeet?: boolean;
  classroomId: number;
  teacherId: number;
}

export type SubjectResponse = {
  id: number;
  name: string;
  description?: string;
  multiplier: number;
  credit: number;
  isOnMeet: boolean;
  classroom: ClassroomResponse;
  teacher: UserResponse;
}

export type UserRequest = {
  cin: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth?: Date;
  mobile?: string;
  address?: string;
  roleId?: number;
  classroomId?: number;
}

export type UserResponse = {
  id: number;
  cin: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth?: Date;
  mobile?: string;
  address?: string;
  role: RoleResponse;
  classroom?: ClassroomResponse;
}

export type Login = {
  email: string;
  password: string;
};

export type Register = {
  cin: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  roleId: number;
};

export type Sort = {
  field: string,
  order: string
}

export type Search = {
  keyword: string;
  field: string;
}

export type PostRequest = {
  title: string;
  content: string;
  files?: FileList;
}