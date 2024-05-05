import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadPhoto from "./components/UploadPhoto";
import LandingUI from "./pages/Landing";
import Museum from "./pages/Museum";
import VeteranGalleryPage from "./pages/VeteranGalleryPage/VeteranGalleryPage";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const routes = [
  { path: "/", element: <LandingUI /> },
  { path: "/admin/dashboard", element: <Dashboard /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  { path: "/veteran-gallery", element: <VeteranGalleryPage /> },
  { path: "/museum", element: <Museum /> },
  { path: "/upload", element: <UploadPhoto /> },
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
