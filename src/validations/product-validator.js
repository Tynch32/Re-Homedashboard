export const validate = values => {
    const errors = {};

    if(!values.name) {
        errors.name = 'El nombre es obligatorio';
    }
    if(!values.price) {
        errors.price = 'El precio debe ser mayor a 0';
    }
    if(!values.description || values.description.length<20) {
        errors.description = 'La descripción debe tener minimo 20 caracteres.';
    }
    if(!values.category_id) {
        errors.category_id = 'Seleccione una Categoría';
    }

    return errors;
    
}