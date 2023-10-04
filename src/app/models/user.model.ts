import { Role } from "./role.model";
import { Status } from "./status.model";

export interface User {
  id: number;
  name: string;
  surname: string;
  username: string;
  password: string;
  email?: string;
  phone?: string;
  status: Status;
  role: Role;
  createdAt?: Date;
  updatedAt?: Date;

}
