import PropTypes from "prop-types"

export const TableProduct = ({ product: {id,name,price,discount,product_category}, handleEditProduct, handleDeleteProduct}) => {
    function addPuntos(numero) {
        return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{product_category&&product_category.name}</td>
            <td>${addPuntos(Math.floor(price))}</td>
            <td>{discount?<b>{discount}%</b>:"-"}</td>
            <td>${addPuntos(Math.floor(price - (price * discount / 100)))}</td>
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

TableProduct.propTypes = {
    product: PropTypes.object,
    handleEditProduct:PropTypes.func,
    handleDeleteProduct:PropTypes.func
}
TableProduct.defaultProps={
    product: { id: "-", name: "-", price: 0, discount: 0, product_category: { name: "-" } }
}