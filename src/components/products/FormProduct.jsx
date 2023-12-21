import { useState,useEffect } from 'react';
import { Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik';
import propTypes from 'prop-types'
import { validate } from '../../validations/product-validator';

export const FormProduct = ({handleAddProduct, product, setProduct, handleUpdateProduct}) => {

    const [categories,setCategories]=useState([]);

    const getCategories = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/api/category/all`);
        let result = await response.json();
        setCategories(result.data)
    };

    useEffect(() => {
        getCategories()
    }, [])
    
    useEffect(() => {
        getCategories()
        if(product) {
            formik.setValues({
                name: product.name,
                price: product.price,
                discount: product.discount||0,
                description: product.description,
                category_id:product.product_category.id
            })
        }

    }, [product])


const formik = useFormik({  
    initialValues :{
        name:"",
        price:"",
        discount:0,
        description: "",
        category_id:"",
    },
    validate,
    onSubmit : (values) =>{
        product ? handleUpdateProduct(product.id,values):
        handleAddProduct(values);
        formik.handleReset();
    }
})

const handleCancel = (event) =>{
    event.preventDefault();
    setProduct(null);
    formik.handleReset();
}
    return (
        <Form className='row' onSubmit={formik.handleSubmit}>
            <Form.Group className='mb-3 col-12'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" 
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder='Nombre del producto...' disabled={product?false:true}>
                </Form.Control>  
                {
                    formik.errors.name && <small className='sm-2 text-danger'>{formik.errors.name}</small>
                }
            </Form.Group>
            <Form.Group className='mb-3 col-12 col-md-6'>
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" name="price"
                onChange={formik.handleChange}
                value={Math.floor(formik.values.price)} disabled={product?false:true}>
                </Form.Control>
                {
                    formik.errors.price && <small className='sm-2 text-danger'>{formik.errors.price}</small>
                }
            </Form.Group>
            <Form.Group className='mb-3 col-12 col-md-6'>
                <Form.Label>Descuento</Form.Label>
                <Form.Control type="number" name="discount"
                onChange={formik.handleChange}
                value={formik.values.discount} disabled={product?false:true}>
                </Form.Control>
                {
                    formik.errors.discount && <small className='sm-2 text-danger'>{formik.errors.discount}</small>
                }
            </Form.Group>
            <Form.Group className='mb-3 col-12 col-md-12'>
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" name="description"
                onChange={formik.handleChange}
                value={formik.values.description} disabled={product?false:true}>
                </Form.Control>
                {
                    formik.errors.description && <small className='sm-2 text-danger'>{formik.errors.description}</small>
                }
            </Form.Group>
            <Form.Group className='mb-3 col-12 col-md-12'>
                <Form.Label>Categoria</Form.Label>
                <Form.Select className='form-control'
                name="category_id"
                onChange={formik.handleChange}
                value={formik.values.category_id} disabled={product?false:true}>
                    <option hidden>Selecciona...</option>
                    {
                        categories.map(({name,id})=>
                        <option key={id} value={id} selected={formik.values.category_id==id}>{name}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3 col-12'>
                {product&&
                <div className='d-flex justify-content-between'>
                    <Button onClick={handleCancel} type="submit" className='buttons_edit' variant='outline-secondary'>Cancelar</Button>
                    <Button type="submit" className='buttons_edit' variant='outline-dark'>Guardar</Button>
                </div>
                }
            </Form.Group>
            
            
        </Form>
    )
}

FormProduct.propTypes = {
    handleAddProduct : propTypes.func,
    handleUpdateProduct : propTypes.func,
    product: propTypes.object,
    setProduct : propTypes.func
}