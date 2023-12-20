import React, { useEffect, useState } from 'react'

export const CategoriesTotal = () => {
    const [categories,setCategories]=useState([]);

    const getCantCategories = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/api/category/cant`);
        let result = await response.json();
        setCategories(result.data)
    };

    useEffect(() => {
        getCantCategories()
    }, [])

    return (
            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Categorías</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-dark text-white shadow">
                                    <div className="card-body">
                                    <i class="fa-solid fa-list"></i> {categories} Categorías en Total
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
