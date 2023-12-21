import React, { useEffect, useState } from 'react'

export const VentasTotal = () => {
    const [ventas,setVentas]=useState([]);

    const getCantUsuarios = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/topsales`);
        let result = await response.json();
        setVentas(result.data.length)
    };

    useEffect(() => {
        getCantUsuarios()
    }, [])

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ventas Realizadas en el Mes</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">
                                <i className="fa-solid fa-cash-register"></i> {ventas} Ventas realizadas
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
