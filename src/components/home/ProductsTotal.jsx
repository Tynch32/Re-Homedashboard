import React, { useEffect, useState } from 'react'

export const ProductsTotal = () => {
    const [products,setProducts]=useState([]);

    const getCantProducts = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/cant`);
        let result = await response.json();
        setProducts(result.data)
    };

    useEffect(() => {
        getCantProducts()
    }, [])

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Productos</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                <i className="fa-solid fa-boxes-packing"></i> {products} Productos en Total
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
