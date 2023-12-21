import { Card, Col, Row, Table } from 'react-bootstrap';
import { TableCategory } from '../components/categories/TableCategory';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import Grafico from '../components/graficos/Grafico';

export const ListCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCategories = async (endpoint = "/api/category/all") => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:3000${endpoint}`);
            const result = await response.json();
            setLoading(false)
            setCategories(result.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getCategories();
    }, []);

    return loading ? (<Loading />) : (
        <Row>
            <Col sm={12} lg={4}>
                <Card className="shadow mb-5">
                    <Card.Body>
                        {
                            <Table striped bordered responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Categorias</th>
                                        <th>Cantidad Productos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category) => (
                                        <TableCategory 
                                            key={category.id} 
                                            category={category}
                                        />
                                    ))}
                                </tbody>
                            </Table>
                        }
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} lg={8}>
                <Card className="shadow mb-5">
                    <div className='card-header py-3'>
                            <h5 className="m-0 font-weight-bold text-gray-800">Cantidad de productos por categoría</h5>
                        </div>
                    <Card.Body>
                        <div className="grafico_category">
                            <Grafico/>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>


    )
}

