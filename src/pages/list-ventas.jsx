import { Card, Col, Row, Table } from 'react-bootstrap';
import { TableVentas } from '../components/ventas/TableVentas';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';

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
            <Col sm={12} lg={12}>
                <Card className="shadow mb-5">
                    <Card.Body>
                        {
                            <Table striped bordered responsive>
                                <thead>
                                    <tr>
                                        <td>#</td>
                                        <td>Producto</td>
                                        <td>Cantidad</td>
                                        <td>Precio</td>
                                        <td>Fecha de Registro</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ventas.map((venta,index) => (
                                        <TableVentas
                                            i={index}
                                            key={index} 
                                            venta={venta}
                                        />
                                    ))}
                                </tbody>
                            </Table>
                        }
                    </Card.Body>
                </Card>
            </Col>
        </Row>


    )
}

