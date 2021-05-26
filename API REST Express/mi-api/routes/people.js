var express = require('express');
var router = express.Router();

/* Controller */
var people_controller = require('../controllers/peopleController');

/* GET people listing. */
router.get('/', people_controller.people_list);

/* POST create user. */
router.post('/', people_controller.people_create);

/* PUT create user. */
router.put('/:id', people_controller.people_updates);

/* DELETE create user. */
router.delete('/:id', people_controller.people_delete);

module.exports = router;