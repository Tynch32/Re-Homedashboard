import { Card, Col, Row, Table } from 'react-bootstrap';
import { TableUser } from '../components/users/TableUser';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';

export const ListUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async (endpoint = "/api/users") => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:3000${endpoint}`);
            const result = await response.json();
            setLoading(false)
            setUsers(result.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getUsers();
    }, []);

    const handleEditUser = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`,{
                method: 'PUT', 
                headers: { 
                    'Content-Type' : 'application/json'
                }});
            const result = await response.json();
            await result.ok && setProduct(result.data);
            getUsers()
        } catch (error) {
            console.log(error);
        } 
    }

    return (
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
                                    {users.map((user) => (
                                        <TableUser 
                                            key={user.id} 
                                            user={user}
                                            handleEditUser={handleEditUser}
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

