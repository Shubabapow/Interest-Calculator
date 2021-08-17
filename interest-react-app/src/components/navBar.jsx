import React from 'react';

function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <ul className="navbar-brand" href="#">
                <li><a href="base.asp">Home</a></li>
                <li><a href="calculator-page.jsx.asp">Calculator</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;