<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { routes } from "./routes";
=======
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';
>>>>>>> 5275af36577841944541c291875a9e2db0a84f52

import logo from "../logo.svg";
import { Suspense } from "react";



export const Navigation = () => {
<<<<<<< HEAD
  return (
    <Suspense fallback={<span>cargando...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((route) => {
                const { name, to } = route;
                return (
                  <li key={name}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => {
              const { Component, path } = route;
              return <Route path={path} element={<Component />} />;
            })}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
=======
    return (
        <Suspense fallback={ <span>Loading...</span> }>

            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo" />
                        <ul>
                            
                            {
                                routes.map(({ to, name }) => (
                                    <li key={ to }>
                                        <NavLink 
                                            to={ to } 
                                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                            { name }
                                        </NavLink>
                                    </li>
                                ))
                                    
                            }
                            
                            
                        </ul>
                    </nav>


                    <Routes>
                        
                        {
                            routes.map( ({ path, Component  }) => (
                                <Route 
                                    key={ path }
                                    path={ path }
                                    element={ <Component /> } 
                                />
                            ))
                        }

                        
                        <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
>>>>>>> 5275af36577841944541c291875a9e2db0a84f52
