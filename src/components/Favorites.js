import { useState, useEffect } from 'react';


const Favorites = () => {

    const [favsInLocal, setFavsInLocal] = useState([]);

    useEffect(() => {
        const favsInLocal = localStorage.getItem('favs');

        if (favsInLocal !== null) {
            const favsArray = JSON.parse(favsInLocal);
            setFavsInLocal(favsArray);
            console.log(favsArray)
        }
    }, [])

    return (
        <div className="container">
            <h2>Seccion mis Favoritos</h2>

            <div className="row">
                {favsInLocal.map((movie, index) => {
                    const { title, overview, imgURL } = movie;

                    return (
                        <div className="col-3" key={index}>
                            <div className="card my-4">
                                <img src={imgURL} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{title.substring(0, 30)}...</h5>
                                    {/* aca el substring lo que hace es recortar el texto y resumirlo a la cantidad de palabras que se desee */}
                                    <p className="card-text">{overview.substring(0, 100)}...</p>
                                    {/* <Link to={`/movieDetail?movieID=${id}`} className="btn btn-primary">View detail</Link> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default Favorites;