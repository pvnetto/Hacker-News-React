import React from 'react';
import { useAuth0 } from "./react-auth0-wrapper";

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginBtn = () => {
    const { loginWithPopup } = useAuth0();

    return (
        <li className="nav-item pl-3">
            <button onClick={() => loginWithPopup({})} className="btn btn-dark py-2 px-3">
                <FontAwesomeIcon icon={faUser} />
            </button>
        </li>
    );
};

export default LoginBtn;