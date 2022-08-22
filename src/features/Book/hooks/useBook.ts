import { Book } from "src/features/Book/type.book";

export const useBook = () => {
  const book: Book = {
    id: 1,
    name: "foo",
    author: "Jhon Doe",
  };
  return {
    book,
  };
};
