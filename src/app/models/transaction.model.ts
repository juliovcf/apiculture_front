import { Client } from "./client.model";
import { User } from "./user.model";

export interface Transaction {

  id: number;
  amount: number;
  transactionType: string;
  paymentType: string;
  client?: Client;
  user?: User;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  completed: boolean;

}
