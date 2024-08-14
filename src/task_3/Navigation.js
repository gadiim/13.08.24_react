import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <NavLink
                to="/views"
                className={({ isActive }) => isActive ? 'on' : ''}
            >
                <button>Views</button>
            </NavLink>
            <NavLink
                to="/landmarks"
                className={({ isActive }) => isActive ? 'on' : ''}
            >
                <button>Landmarks</button>
            </NavLink>
            <NavLink to="/famous-landmark"
                className={({ isActive }) => isActive ? 'on' : ''}
            >
                <button>Famous</button>
            </NavLink>
            <NavLink to="/about"
                className={({ isActive }) => isActive ? 'on' : ''}
            >
                <button>About</button>
            </NavLink>
        </nav>
    );
}
