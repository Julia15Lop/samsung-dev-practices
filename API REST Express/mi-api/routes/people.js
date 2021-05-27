var express = require('express');
var router = express.Router();

/* Validation rules */
const { check } = require('express-validator');

const valid_person = [
    check('name', 'Nombre, debe tener al menos tres caracteres')
        .isLength({ min: 3 })
        .isAlpha(locale = 'es-ES', {ignore: '- /'}),
    check('surname', 'Apellidos, debe tener al menos tres caracteres')
        .isLength({ min: 3 })
        .isAlpha(locale = 'es-ES', {ignore: '- /'}),
    check('age', 'Edad, debe estar entre 0 y 125')
        .isFloat({ min: 0, max: 125}),
    check('dni', 'DNI, debe seguir el siguiente formato: 12345678A')
        .isLength({ min: 9})
        .isAlphanumeric(),
    check('birth', 'Fecha nacimiento, debe seguir el siguiente formato: aaaa-mm-dd')
        .isISO8601(),
    check('color', 'Color, debe tener al menos tres caracteres')
        .isLength({ min: 3 })
        .isAlpha(locale = 'es-ES', {ignore: '- /'}),
    check('sex', 'Sexo, puede ser Hombre, Mujer, Otro, No especificado')
        .isIn(['Hombre', 'Mujer', 'Otro', 'No especificado'])
];

/* Controller */
var people_controller = require('../controllers/peopleController');

/* GET people listing. */
router.get('/', people_controller.people_list);

/* POST create user. */
router.post('/', valid_person, people_controller.people_create);

/* PUT create user. */
router.put('/:id', people_controller.people_updates);

/* DELETE create user. */
router.delete('/:id', valid_person, people_controller.people_delete);

module.exports = router;