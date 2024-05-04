import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import IndexPage from "./pages/IndexPage";
import VeteranGalleryPage from "./pages/VeteranGalleryPage/VeteranGalleryPage";

const routes = [
  { path: "/", element: <IndexPage /> },
  { path: "/admin/dashboard", element: <Dashboard /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  { path: "/veteran-gallery", element: <VeteranGalleryPage /> },
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
