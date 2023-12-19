import React, { useEffect, useState } from 'react';
import ChartComponent from './ChatComponent';

export const ListGraphicCategories = () => {
  const testData = [
    { category: 'Electrónicos', productCount: 30 },
    { category: 'Ropa', productCount: 20 },
    { category: 'Juguetes', productCount: 15 },
    { category: 'Hogar', productCount: 25 },
  ];
  const [chartData, setChartData] = useState(testData);

  useEffect(() => {
    // Simula una solicitud fetch
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/category/all`); 
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Categorías</h1>
      <ChartComponent data={chartData} />
    </div>
  );
};
