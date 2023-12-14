import React, { useEffect, useState } from 'react'

export const GenresInDb = () => {
    const [genres,setGenres]=useState([]);

    const getGenres = async () => {
        let response = await fetch('http://localhost:3001/api/v1/genres');
        let result = await response.json();
        setGenres(result.data)
    };

    useEffect(() => {
        getGenres()
    }, [])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            genres.map(({id,name})=>(
                        <div key={id} className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                    {name}
                                </div>
                            </div>
                        </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
