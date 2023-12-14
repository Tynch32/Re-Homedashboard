import PropTypes from "prop-types"

export const TableItem = ({ product: {id, title, length, rating, category, awards}, handleEditProduct, handleDeleteProduct}) => {
    
    return (
        <tr>
            <td>{title}</td>
            <td>{length} min</td>
            <td>{rating}</td>
            <td>{category?.name}</td>
            <td>{awards}</td>
            <td>
                <div className="d-flex">
                    <button className="btn btn-sm btn-outline-dark mr-3" onClick={()=> handleEditProduct(id)}>
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-dark" onClick={()=> handleDeleteProduct(id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

TableItem.propTypes = {
    product: PropTypes.object,
    handleEditProduct:PropTypes.func,
    handleDeleteProduct:PropTypes.func
}
TableItem.defaultProps={
    category: {name:"Sin genero asignado"}
}