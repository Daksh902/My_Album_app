import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/add-album">Add Album</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
