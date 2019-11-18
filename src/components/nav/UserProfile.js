import React from 'react';
import { useAuth0 } from "../auth0/auth0-wrapper";

const UserProfile = () => {

    const { loading, user } = useAuth0();

    return (
        <li className="nav-item d-flex flex-row align-items-center">
            <p className="d-inline">{loading || !user ? "Loading..." : "Hello, " + user.name + "!"}</p>
        </li>
    );
};

export default UserProfile;