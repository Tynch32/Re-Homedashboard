import React, { useEffect, useState } from 'react'

export const CategoriesInDb = () => {
    const [categories,setCategories]=useState([]);

    const getCategories = async () => {
        let response = await fetch('http://localhost:3001/api/v1/categories');
        let result = await response.json();
        setCategories(result.data)
    };

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Categories in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            categories.map(({id,name})=>(
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
