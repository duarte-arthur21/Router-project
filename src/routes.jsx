import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

const MyRoutes = () => {
  return (
    <Routes>
      {/* Routes é o componetes usado para criar rotas */}

      {/* Cria a rota '/' para o componente Home */}
      <Route exact path="/" element={<Home />} />
      {/* Cria a rota '/about' para o componente About */}
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
export { MyRoutes };
