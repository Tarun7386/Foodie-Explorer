// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import About from "./pages/About.jsx";
import Explore from "./pages/Explore.jsx";
import SignUp from "./pages/SignUp.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserRegister from "./components/User/UserRegister.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import Admin_Home from "./components/Admin/Admin_Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CollectRegistrations from "./components/Admin/CollectRegistrations.jsx";
import UsersList from "./components/Admin/UsersList.jsx";
import AddPlaces from "./components/Admin/AddPlaces.jsx";
import DeactivateUser from "./components/Admin/DeactivateUser.jsx";
import SendMessage from "./components/Admin/SendMessage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/explore", element: <Explore /> },
      { path: "/sign_in", element: <SignIn /> },
      { path: "/sign_up", element: <SignUp /> },
      { path: "/about", element: <About /> },
      { path: "/user_login", element: <UserLogin /> },
      { path: "/user_register", element: <UserRegister /> },
      { path: "admin_login", element: <AdminLogin /> },
      { path: "admin_home", element: <Admin_Home /> },
      { path: "collect_registrations", element: <CollectRegistrations /> },
      { path: "users_list", element: <UsersList /> },
      { path: "add_places", element: <AddPlaces /> },
      { path: "deactivate_user", element: <DeactivateUser /> },
      { path: "send_message", element: <SendMessage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
