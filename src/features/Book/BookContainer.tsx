import { BookSearchContainer } from "src/features/Book/BookSearchContainer";
import { BookTableContainer } from "src/features/Book/BookTableContainer";

export const BookContainer = () => {
  return (
    <>
      <BookSearchContainer />
      <BookTableContainer />
    </>
  );
};
