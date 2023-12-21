import PropTypes from "prop-types"

export const TableVentas = ({ venta: {index, product_id, cantidad, precio,fecha},i}) => {
    function addPuntos(numero) {
        return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (
        <tr>
            <td>{i+1}</td>
            <td>{product_id}</td>
            <td>{cantidad}</td>
            <td>$ {addPuntos(precio)}</td>
            <td>{fecha.split("T")[0]}</td>
        </tr>
    )
}

TableVentas.propTypes = {
    category: PropTypes.object,
    key:PropTypes.integer
}
TableVentas.defaultProps={
    product_id: {name:"-"}
}