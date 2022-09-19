import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import ShoppinPage from '../2-component-pattern/pages/ShoppinPage';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/shopping" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="about" element={ <h1>About Page</h1> } />
                    <Route path="users" element={ <h1>Users Page</h1> } />
                    <Route path="shopping" element={ <ShoppinPage /> } />
                    
                    <Route path="/*" element={ <Navigate to="/shopping" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
