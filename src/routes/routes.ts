<<<<<<< HEAD
import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../1-lazyload/pages/NoLazy";
// import { LazyPage1 } from "../1-lazyload/pages";
=======
import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
// import { LazyPage1 } from '../01-lazyload/pages';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
>>>>>>> 5275af36577841944541c291875a9e2db0a84f52

type JSXComponent = () => JSX.Element;

interface Route {
<<<<<<< HEAD
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
  
=======
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));



export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },

>>>>>>> 5275af36577841944541c291875a9e2db0a84f52
];
