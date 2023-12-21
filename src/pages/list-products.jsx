import { Card, CardTitle, Col, Row, Table } from 'react-bootstrap';
import { TableProduct } from '../components/products/TableProduct';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Paginator } from '../components/products/Paginator';
import { FormSearch } from '../components/products/FormSearch';
import { FormProduct } from '../components/products/FormProduct';

export const ListProducts = () => {
    const [product,setProduct] =useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState();

    const getProducts = async (endpoint = "/api/products") => {
        try {
            setLoading(true);
            const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`);
            const result = await response.json();
            setLoading(false)
            setProducts(result.data);
            setPagination(result.meta)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handlePagination = async (event, endpoint) => {
        event.preventDefault();
        await getProducts(endpoint)
    }
    const handleAddProduct = async (data) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`,{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    const handleEditProduct = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`);
            const result = await response.json();
            result.ok && setProduct(result.data); 
        } catch (error) {
            console.log(error);
        } 
    }

    const handleUpdateProduct = async (id,data) =>{
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`,{
                method: 'PUT', 
                headers: { 
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            setProducts(
                products.map((product)=>
                product.id===result.data.id ? result.data:product)
            );
            setProduct(null);
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteProduct = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`,{
                method: 'DELETE'
            });

            const result = await response.json();
            if(result.ok){
                console.log(result);
                setProducts(products.filter(product=>product.id!==id))
            }
        } catch (error) {
            console.log(error);
        }
    }

    return loading ? (<Loading />) : (
        <Row>
            <Col sm={12} lg={8}>
                <Card className="shadow mb-5">
                    <Card.Body>
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <FormSearch
                                getProducts={getProducts}
                            />
                            <Paginator pagination={pagination} handlePagination={handlePagination} />
                        </div>
                        {
                            <Table striped bordered responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Producto</th>
                                        <th>Categoría</th>
                                        <th>Precio</th>
                                        <th>Descuento</th>
                                        <th>P. Final</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <TableProduct 
                                            key={product.id} 
                                            product={product}
                                            handleEditProduct={handleEditProduct}
                                            handleDeleteProduct={handleDeleteProduct}
                                        />
                                    ))}
                                </tbody>
                            </Table>
                        }
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} lg={4}>
                <Card className='mb-3'>
                    <Card.Header>
                        <CardTitle>{product?("Editar: "+product.name):"Seleccione un producto para editar"}</CardTitle>
                        {/* Desactive los botones del FormProduct hasta agregar imagen por fetch */}
                    </Card.Header>
                    <Card.Body>
                        <FormProduct handleAddProduct={handleAddProduct} product={product} handleUpdateProduct={handleUpdateProduct} setProduct={setProduct}/>
                    </Card.Body>
                </Card>
            </Col>
        </Row>


    )
}

