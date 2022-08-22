import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "src/pages";

const About: React.FC = () => {
  return <h2>About</h2>;
};

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
