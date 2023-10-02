import { Nationality } from "./nationality.model";
import { Status } from "./status.model";
import { User } from "./user.model";


export interface Client {
  id: number;
  name: string;
  surname: string;
  dni?: string;
  address?: string;
  postalCode?: string;
  location?: string;
  rega?: string;
  beehives: number;
  acount?: string;
  insuranceAmount?: number;
  phone?: string;
  email?: string;
  note?: string;
  nationality?: Nationality;
  status?: Status;
  user?: User;
  createdAt?: string; // Cambia a string o Date según el formato de fecha en tu API
  updatedAt?: string; // Cambia a string o Date según el formato de fecha en tu API
}
