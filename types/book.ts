export interface IBook {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend: boolean;
  userId?: string | null;
}
