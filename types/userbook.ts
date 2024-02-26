export interface IUserbook {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  status: string;
  userId: string | null;
}
