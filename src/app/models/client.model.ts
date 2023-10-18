import { Nationality } from "./nationality.model";
import { Status } from "./status.model";
import { User } from "./user.model";


export interface Client {
  id: number;
  name: string;
  surname: string;
  dni?: string;
  adress?: string;
  postalCode?: string;
  location?: string;
  rega?: string;
  beehives: number;
  account?: string;
  insuranceAmount?: number;
  phone?: string;
  email?: string;
  note?: string;
  nationality?: Nationality;
  status?: Status;
  user?: User;
  createdAt?: string;
  updatedAt?: string;
}
