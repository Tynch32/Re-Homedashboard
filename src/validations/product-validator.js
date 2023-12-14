export const validate = values => {
    const errors = {};

    if(!values.name) {
        errors.name = 'El título es obligatorio';
    }
    if(!values.price) {
        errors.price = 'Ingrese cantidad de premios o 0';
    }
    if(!values.rating) {
        errors.rating = 'El rating es obligatorio';
    }
    if(!values.release_date) {
        errors.release_date = 'La fecha es obligatoria';
    }
    if(!values.length) {
        errors.length = 'La duración es obligatoria';
    }
    if(!values.category_id) {
        errors.category_id = 'Seleccione el genero';
    }

    return errors;

}