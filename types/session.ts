import { Session, User } from "next-auth";

export interface ISession extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    image: string;
  };
  token: {
    name: string;
  };
}
