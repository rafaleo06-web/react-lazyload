import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

// import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <h2>DOW</h2>
      </div>
      <ul>
        {routes.map(({ to, name }) => (
          <li key={to}>
            <NavLink to={to} className={({ isActive }) => (isActive ? "nav-active" : "")}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <NavLink to={"/help"}>Help</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ Component, path }) => (
            <Route key={path} path={path} element={<Component></Component>}></Route>
          ))}

          <Route path="/*" element={<Navigate to={"/lazy"}></Navigate>}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
