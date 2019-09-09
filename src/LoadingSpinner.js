import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingSpinner = () => {
    return (
        <div className="row py-3 bg-light loading-spinner">
            <div className="col-12 d-flex flex-row align-items-center justify-content-center">
                <FontAwesomeIcon icon={faSpinner} className="mr-2" />
            </div>
        </div>
    );
};

export default LoadingSpinner;