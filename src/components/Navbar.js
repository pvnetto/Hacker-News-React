import React from 'react';

import { faHireAHelper } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth0 } from "../react-auth0-wrapper";
import LoginBtn from './LoginBtn';
import UserProfile from './UserProfile';

const Navbar = (props) => {
    const { isAuthenticated } = useAuth0();

    return (
        <nav className="row navbar navbar-light bg-secondary py-3">
            <ul className="col-12 w-100 navbar-nav flex-row justify-content-between align-items-center">
                <li className="nav-item">
                    <a className="navbar-brand d-flex flex-row justify-content-center align-items-center" href="">
                        <FontAwesomeIcon icon={faHireAHelper} className="mr-2" />
                        <h4 className="font-weight-bold d-md-inline d-none">HNews Search</h4>
                    </a>
                </li>
                <li className="nav-item w-100 mx-4">
                    <form action="">
                        <input onChange={(e) => props.onTypeSearch(e.target.value)} className="w-100 p-2" type="text" placeholder="Search anything you want in hacker news" />
                    </form>
                </li>

                {
                    isAuthenticated ?
                        <UserProfile /> :
                        <LoginBtn />
                }
            </ul>
        </nav>
    );
};

export default Navbar;