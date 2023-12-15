import { useState } from "react"
import { Form } from "react-bootstrap"
import PropTypes from 'prop-types'

export const FormSearch = ({getProducts}) => {

    const [valuesForm, setValuesForm] = useState({});
    const handleInputChange = ({target})=>{
        setValuesForm({
            ...valuesForm,
            [target.name]:target.value
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        getProducts(`/api/products?keyword=${valuesForm.keyword}`)
    }

  return (
    <Form onSubmit={handleSubmit}>
        <div className="d-flex input-group mb-3">
                <input type="text" name="keyword" className="form-control" onChange={handleInputChange}/>
                <button className="btn input-group-text" type="submit"><i className="fa fa-search"></i></button>
        </div>
    </Form>
    
  )
}

FormSearch.propTypes = {
    getProducts: PropTypes.func
}
