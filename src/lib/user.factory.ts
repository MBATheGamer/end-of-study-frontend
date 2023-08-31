import type { UserRequest, UserResponse } from "./custom-types"

export const userRequestFactory = (user: UserResponse | null = null): UserRequest => {
  return {
    cin: user?.cin || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    roleId: user?.role?.id || 0,
    classroomId: user?.classroom?.id || 0
  }
}