import React from 'react';
import { Navigate } from 'react-router-dom';


const MovieDetail = () => {

    const token = sessionStorage.getItem('token');

    return (
        <>
            {!token && <Navigate to="/" />}

            <div>MovieDetail</div>

        </>
    )
}

export default MovieDetail;