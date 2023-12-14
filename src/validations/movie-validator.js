export const validate = values => {
    const errors = {};

    if(!values.title) {
        errors.title = 'El título es obligatorio';
    }
    if(!values.awards) {
        errors.awards = 'Ingrese cantidad de premios o 0';
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
    if(!values.genre_id) {
        errors.genre_id = 'Seleccione el genero';
    }

    return errors;

}