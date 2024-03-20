const express = require('express');
const router = express.Router();

const {getAllTask, getTask, createTask, updateTask, deleteTask} = require('../controllers/tasks');

router.route('/').get(getAllTask);
router.route('/').post(createTask);
router.route('/:id').get(getTask);
router.route('/:id').patch(updateTask);
router.route('/:id').delete(deleteTask);

module.exports = router;