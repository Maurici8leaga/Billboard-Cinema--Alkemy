import React from 'react'

const Results = () => {

    const query = new URLSearchParams(window.location.search);
    const keyword = query.get('keyword');

  return (
    <div className="container">
        <h2>Resultados</h2>
        <p>Buscando a : {keyword}</p>
    </div>
  )
}

export default Results;