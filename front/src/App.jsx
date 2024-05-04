import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Museum from "./pages/Museum";
import VeteranGalleryPage from "./pages/VeteranGalleryPage/VeteranGalleryPage";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const routes = [
  { path: "/", element: <IndexPage /> },
  { path: "/admin/dashboard", element: <Dashboard /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  { path: "/veteran-gallery", element: <VeteranGalleryPage /> },
  { path: "/museum", element: <Museum /> },
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
