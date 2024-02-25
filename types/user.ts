import { IBook } from ".";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: String;
  imageUrl: String;
  token: String;
  books: IBook[];
}
