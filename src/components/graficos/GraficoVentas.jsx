import React from 'react';
import { Chart } from 'react-google-charts';
import { useEffect, useState } from 'react';

export const options = {
    title:"Recaudación por día",
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
            let ventas=[["Dias","Recaudación"]]
            let data =[]
            result.data.forEach(venta => {
                let fecha = [venta.fecha.split("-")[2].split("T")[0],venta.precio]
                data.push(fecha);
            });
            const sumasPorFecha = {};
            data.forEach(([fecha, numero]) => {
                if (sumasPorFecha[fecha]) {
                  sumasPorFecha[fecha] += numero;
                } else {
                  sumasPorFecha[fecha] = numero;
                }
              });
            const nuevoArray = Object.entries(sumasPorFecha).map(([fecha, suma]) => [fecha, suma]);
            const compararPorPrimerElemento = (a, b) => a[0] - b[0];
            const arrayOrdenado = nuevoArray.sort(compararPorPrimerElemento);
            arrayOrdenado.forEach(element=>
              ventas.push(element)  
            );

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
        chartType='BarChart'
        data={ventas}
        options={options}
        width={"100%"}
        height={"100%"}
        />
    );
}