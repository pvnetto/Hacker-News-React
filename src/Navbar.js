import React from 'react';

const Navbar = () => {
    return (
        <nav className="row navbar navbar-light bg-light py-3">
            <ul className="col-12 w-100 navbar-nav flex-row justify-content-between align-items-center">
                <li className="nav-item">
                    <a className="navbar-brand flex-row" href="">
                        <i></i>
                        <h4 className="m-0">HNews Search</h4>
                    </a>
                </li>
                <li className="nav-item w-100 mx-4">
                    <form action="">
                        <input className="w-100 p-2" type="text" placeholder="Search anything you want in hacker news" />
                    </form>
                </li>
                <li className="nav-item px-3">
                    <button className="btn btn-secondary py-1 px-4">Login</button>
                </li>
                <li className="nav-item">
                    <i>COG</i>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;