import { Card, Col, Row, Table } from 'react-bootstrap';
import { Tableventa } from '../components/ventas/Tableventa';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';

export const Listventas = () => {
    const [ventas, setventas] = useState([]);
    const [loading, setLoading] = useState(true);

    const getventas = async (endpoint = "/api/ventas") => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:3000${endpoint}`);
            const result = await response.json();
            setLoading(false)
            setventas(result.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getventas();
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
                                        <td>Id</td>
                                        <td>Nombre</td>
                                        <td>Apellido</td>
                                        <td>Email</td>
                                        <td>Fecha de Registro</td>
                                        <td>Rol</td>
                                        <td>Cambiar Rol</td>
                                        <td>Eliminar</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ventas.map((venta) => (
                                        <Tableventa 
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
        </Row>


    )
}

