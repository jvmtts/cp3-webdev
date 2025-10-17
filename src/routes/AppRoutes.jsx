import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Perfil from "../pages/Perfil";
import Carrinho from "../pages/Carrinho";
import App from "../Layout";
import Produto from "../pages/Produto";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Perfil",
        element: <Perfil/>
      },
      {
        path: "/Carrinho",
        element: <Carrinho/>
      },
            {
        path: "/Produto",
        element: <Produto/>
      },
    ],
  },
]);