import type { Path } from "$lib/interface/path";

export const paths: Path[] = [
  {
    path: "",
    label: "Home"
  },
  {
    path: "features",
    label: "Features"
  },
  {
    path: "faqs",
    label: "FAQs"
  },
  {
    path: "about",
    label: "About"
  }
];

export const authPaths: Path[] = [
  {
    path: "courses",
    label: "Courses"
  },
  {
    path: "assignments",
    label: "Assignments"
  },
  {
    path: "result",
    label: "Result"
  }
];

export const adminPath: Path[] = [
  {
    path: "dashboard",
    label: "Dashboard"
  },
  {
    path: "users",
    label: "Users"
  },
  {
    path: "departments",
    label: "Departments"
  },
  {
    path: "classrooms",
    label: "Classrooms"
  },
  {
    path: "subjects",
    label: "Subjects"
  }
];

export const settingPath: Path[] = [
  {
    path: "profile/setting/info",
    label: "Info"
  },
  {
    path: "profile/setting/password",
    label: "Password"
  },
];
