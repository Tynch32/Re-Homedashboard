import PropTypes from "prop-types"

export const TableUser = ({ user: {id, name,surname,email,created_at,roleId}, handleEditUser, handleDeleteUser}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{email}</td>
            <td>{created_at.split("T")[0]}</td>
            <td>{roleId.name}</td>
            <td>
                <div className="d-flex">
                    <button className="btn btn-sm btn-outline-dark mr-3" onClick={()=> handleEditUser(id)}>
                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                    </button>
                </div>
            </td>
            <td>
                <button className="btn btn-sm btn-outline-dark" onClick={()=> handleDeleteUser(id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    )
}

TableUser.propTypes = {
    user: PropTypes.object,
    handleEditUser:PropTypes.func,
    handleDeleteUser:PropTypes.func
}
TableUser.defaultProps={
    category: {name:"-"}
}