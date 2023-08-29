import User from "./user";

export interface GroupAdmin {
  id: number;
  user: User;
  groupID: number;
}