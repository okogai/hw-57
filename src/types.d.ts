export interface IUser {
  id: string;
  name: string;
  email: string;
  active: boolean;
  role: "" | "user" | "editor" | "admin";
}

export interface IUserMutation {
  id: string;
  name: string;
  email: string;
  active: boolean;
  role: "" | "user" | "editor" | "admin";
}
