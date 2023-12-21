import React from 'react';
import { Chart } from 'react-google-charts';
import { useEffect, useState } from 'react';

export const options = {
    title:"Categorías",
    is3D:true,
    animation: {
        duration: 1000, // Duración de la animación en milisegundos
        easing: 'out', // Función de aceleración de la animación (linear, in, out, inAndOut)
    }
}

export default function Grafico(){
    const [categories, setCategories] = useState([]);

    const getCategories = async (endpoint = "/api/category/all") => {
        try {
            const response = await fetch(`http://localhost:3000${endpoint}`);
            const result = await response.json();
            let categorias=[["Categorias","Cant. Productos"]]
            result.data.forEach(dato=>{
                categorias.push([dato.name,dato.product_category.length]);
            }
            )
            setCategories(categorias)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getCategories();
    }, []);
    return (
        <Chart
        chartType='PieChart'
        data={categories}
        options={options}
        width={"100%"}
        height={"100%"}
        />
    );
}