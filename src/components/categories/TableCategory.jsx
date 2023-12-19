import PropTypes from "prop-types"

export const TableCategory = ({ category: {id, name,product_category}}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>
                {product_category.length}
            </td>
        </tr>
    )
}

TableCategory.propTypes = {
    category: PropTypes.object
}
TableCategory.defaultProps={
    category: {name:"-"}
}