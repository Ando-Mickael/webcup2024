import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game/Game";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import GameLobbyPage from "./pages/game/GameLobbyPage";
import IndexPage from "./pages/IndexPage";

const routes = [
  { path: "/", element: <IndexPage /> },
  { path: "/admin/dashboard", element: <Dashboard /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  { path: "/game/lobby", element: <GameLobbyPage /> },
  { path: "/game/play", element: <Game /> },
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
