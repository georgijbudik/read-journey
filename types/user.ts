import { IBook } from ".";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  imageUrl: string;
  token: string;
  books: IBook[];
}
