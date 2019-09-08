import React from 'react';

import { faHireAHelper } from '@fortawesome/free-brands-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {

    return (
        <nav className="row navbar navbar-light bg-secondary py-3">
            <ul className="col-12 w-100 navbar-nav flex-row justify-content-between align-items-center">
                <li className="nav-item">
                    <a className="navbar-brand d-flex flex-row justify-content-center align-items-center" href="">
                        <FontAwesomeIcon icon={faHireAHelper} className="mr-2" />
                        <h4 className="font-weight-bold">HNews Search</h4>
                    </a>
                </li>
                <li className="nav-item w-100 mx-4">
                    <form action="">
                        <input onChange={(e) => props.onTypeSearch(e.target.value)} className="w-100 p-2" type="text" placeholder="Search anything you want in hacker news" />
                    </form>
                </li>
                <li className="nav-item px-3">
                    <button className="btn btn-dark py-1 px-4">Login</button>
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon icon={faCogs} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;