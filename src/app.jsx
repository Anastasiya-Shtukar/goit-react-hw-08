import "./app.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { lazy, useEffect } from "react";
import RestrictedRoute from "./components/RestrictedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { useDispatch, useSelector } from "react-redux";
//import { refreshUser } from "./redux/operations.js";
import { selectRefreshUser } from "./redux/selectors.js";

const HomePage = lazy(() => import("./pages/Home.jsx"));
const ContactsPage = lazy(() => import("./pages/Contacts.jsx"));
const LoginPage = lazy(() => import("./pages/Login.jsx"));
const RegisterPage = lazy(() => import("./pages/Register.jsx"));

export function App() {
  /*const isRefreshUser = useSelector(selectRefreshUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  if (isRefreshUser) {
    return <p>refreshing...</p>;
  }*/

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectPath="/login" Component={<ContactsPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectPath="/contacts"
              Component={<LoginPage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectPath="/contacts"
              Component={<RegisterPage />}
            />
          }
        />
      </Routes>
    </Layout>
  );
}
