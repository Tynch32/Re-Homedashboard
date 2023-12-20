import React, { useEffect, useState } from 'react'

export const LastProductInDb = () => {
    const [lastProduct,setLastProduct]=useState([]);
    const [precio, setPrecio] = useState();
    const [url, setUrl] = useState();

    function addPuntos(numero) {
        return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const getLastProduct = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/last`);
        let result = await response.json();
        setLastProduct(result.data);
        setPrecio(addPuntos(Math.floor(result.data.price)));
        setUrl(getUrl(result.data.product_image))
    };

    useEffect(() => {
        getLastProduct();

    }, [])

    function getUrl(id){
        return `${import.meta.env.VITE_API_URL}/img/products/${id[0].file}`
    }

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Agregado</h5>
                </div>
                <div className="card-body">
                    <h5 className="m-0 font-weight-bold text-gray-800">{lastProduct.name}</h5>
                    <div className="text-center">
                        {console.log(url)}
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={url} alt="Ultimo producto"/>
                    </div>
                    <h5 className="m-0 font-weight-bold text-gray-800"> $ {precio}</h5>
                    <p>{lastProduct.description}</p>
                </div>
            </div>
        </div>
    )
}
