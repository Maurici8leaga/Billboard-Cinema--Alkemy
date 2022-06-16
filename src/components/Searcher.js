import React from 'react';
import swAlert from '@sweetalert/with-react';



const Searcher = () => {

    const submitHandler = e => {
        e.preventDefault();

        const keyword = e.currentTarget.keyword.value;
        // para acceder al valor del input con "currentTarget" se accede al input en general, al indicarle "keyword" que es el name del input
        // podremos tener acceso a la propiedad del input, el cual nos interesa sera el value

        if (keyword.length === 0) {
            swAlert({
                title: "You should type a keyword at least",
                icon: "warning"
            })
        }
    }

    return (
        <>
            <form className="d-flex" onSubmit={submitHandler}>
                <input className="form-control me-2" type="text" name="keyword" placeholder="Search a movie..." />
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
        </>
    )
}

export default Searcher;