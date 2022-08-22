import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Book } from "src/pages/Book";
import { Home } from "src/pages/Home";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
};
