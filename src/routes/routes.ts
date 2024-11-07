import { lazy, LazyExoticComponent } from "react";
// import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent>,
  name : string
}

const Lazy1 = lazy(()=> import (/* @vite-name: "LazyPage-1" */'../01-lazyload/pages/LazyPage'))
const Lazy2 = lazy(()=> import (/* @vite-name: "LazyPage-2" */'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(()=> import (/* @vite-name: "LazyPage-3" */'../01-lazyload/pages/LazyPage3'))

export const routes:  Route[]= [
  {
    to: '/lazy',
    path: '/lazy',
    Component: Lazy1,
    name :'Lazy-1'
  },
  {
    to: '/lazy2',
    path: '/lazy2',
    Component: Lazy2,
    name :'Lazy-2'
  },
  {
    to: '/lazy3',
    path: '/lazy3',
    Component: Lazy3,
    name :'Lazy-3'
  }
]
