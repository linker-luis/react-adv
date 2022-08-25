import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../1-lazyload/pages/NoLazy";
// import { LazyPage1 } from "../1-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  // Component: () => JSX.Element;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "lazyPage1" */ "../1-lazyload/layout/LazyLayout"
    )
);


export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "Lazy - layout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
  
];
