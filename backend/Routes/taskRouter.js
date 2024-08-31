const { createTask, fatchAllTasks, updateTask, deleteTask } = require('../controller/taskController');

const router = require('express').Router();


// All task
router.get('/', fatchAllTasks);

// To create a tasks
router.post('/create', createTask);

// updated Task
router.put('/update/:id', updateTask);

// Delete Task
router.delete('/delete/:id', deleteTask);

module.exports = router;