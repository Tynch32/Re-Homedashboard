import { Card, Col, Row, Table } from 'react-bootstrap';
import { TableCategory } from '../components/categories/TableCategory';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { ListGraphicCategories } from '../components/categories/ListGraphicCategories';

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
            <Col sm={12} lg={12}>
                <Card className="shadow mb-5">
                    <Card.Body>
                        <ListGraphicCategories/>
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
        </Row>


    )
}

