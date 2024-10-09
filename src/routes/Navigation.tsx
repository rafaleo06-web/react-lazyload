import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <h2>DOW</h2>
      </div>
      <ul>
        <li>
          <NavLink to={"/lazy"} className={({ isActive }) => (isActive ? "nav-active" : "")}>
            Lazy1
          </NavLink>
        </li>
        <li>
          <NavLink to={"/lazy2"} className={({ isActive }) => (isActive ? "nav-active" : "")}>
            Lazy2
          </NavLink>
        </li>
        <li>
          <NavLink to={"/lazy3"} className={({ isActive }) => (isActive ? "nav-active" : "")}>
            Lazy3
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to={"/help"}>Help</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy" element={<LazyPage></LazyPage>}></Route>
        <Route path="lazy2" element={<LazyPage2></LazyPage2>}></Route>
        <Route path="lazy3" element={<LazyPage3></LazyPage3>}></Route>

        <Route path="help" element={<Navigate to={"/lazy"}></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
