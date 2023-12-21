import { Card, Col, Row, Table } from 'react-bootstrap';
import { TableVentas } from '../components/ventas/TableVentas';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import GraficoVentas from '../components/graficos/GraficoVentas';

export const ListVentas = () => {
    const [ventas, setVentas] = useState([]);
    const [loading, setLoading] = useState(true);

    const getVentas = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/topsales`);
            const result = await response.json();
            setLoading(false)
            setVentas(result.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getVentas();
    }, []);

    return loading ? (<Loading />) : (
        <Row>
            <Col sm={12} lg={6}>
                <Card className="shadow mb-5">
                    <Card.Body>
                        {
                            <Table striped bordered responsive>
                                <thead>
                                    <tr>
                                        <td>#</td>
                                        <td>Codigo de Producto</td>
                                        <td>Cantidad</td>
                                        <td>Precio de Venta</td>
                                        <td>Fecha de la Venta</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ventas.map((venta,index) => (
                                        <TableVentas
                                            i={index}
                                            key={venta.id} 
                                            venta={venta}
                                        />
                                    ))}
                                </tbody>
                            </Table>
                        }
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} lg={6}>
                <Card className="shadow mb-5">
                    <div className='card-header py-3'>
                            <h5 className="m-0 font-weight-bold text-gray-800">Cantidad de ventas del ultimo mes</h5>
                        </div>
                        <Card.Body>
                            <div className="grafico_category">
                                <GraficoVentas/>
                            </div>
                        </Card.Body>
                </Card>        
            </Col>
        </Row>


    )
}

