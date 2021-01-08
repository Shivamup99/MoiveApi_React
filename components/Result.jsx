import React from 'react';

function Result({result , openPopup}){
    return (
        <>
        <div className ="result" onClick={() => openPopup(result.imdbID)}>
            <img src = {Result.Poster} alt="Shivam" />
            <h3> {Result.Title}</h3>
        </div>

        </>
    );
}
export default Result