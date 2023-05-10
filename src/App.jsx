import { BrowserRouter as Router, Link } from "react-router-dom";
import { MyRoutes } from "./routes";

const App = () => {
  return (
    <Router>
      {/* Componente Router é usado para monitorar as rotas */}

      <div>
        {/* Cria omenu de navegação para os componentes atraves de event onClick */}

        {/* Componente Menu */}
        <nav>
          <ul>
            <li>
              {/* Passa o paramentro "/" para o componente MyRoutes */}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* Passa o paramentro "/about" para o componente MyRoutes */}
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <MyRoutes />
      </div>
    </Router>
  );
};

export default App;
