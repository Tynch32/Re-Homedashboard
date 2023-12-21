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

export default function GraficoVentas(){
    const [ventas, setVentas] = useState([]);

    const getVentas = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/products/topsales`);
            const result = await response.json();
            let ventas=[["Mes","Recaudación"]]
            result.data.forEach(venta => {
                let fecha = [venta.fecha.split("-")[1],venta.precio]
                ventas.push(fecha);
            });
            setVentas(ventas)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getVentas();
    }, []);
    return (
        <Chart
        chartType='LineChart'
        data={ventas}
        options={options}
        width={"100%"}
        height={"100%"}
        />
    );
}