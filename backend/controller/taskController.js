
const TaskModal = require('../models/taskSchema');

const createTask  = async (req, res) =>{
    const data = req.body;
    try{
        const model = new TaskModal(data);
        await  model.save();
        res.status(201).json({
            message: 'Task is created', success: true
        })
    } catch(err) {
        res.status(500).json({
            message: 'Failed to create task', success: false
        })
    }
}

// fatch all tasks

const fatchAllTasks  = async (req, res) =>{
    try{
        const data = await TaskModal.find({}); // Corrected the use of await
        res.status(200).json({
            message: 'All Tasks',
            success: true,
            data
        });
    } catch(err) {
        res.status(500).json({
            message: 'Failed to All task', success: false
        })
    }
}

// update Task

const updateTask  = async (req, res) =>{
    try{
        const id = req.params.id;
        const body = req.body;
        const obj = {$set: { ...body} };
        const data = await TaskModal.findByIdAndUpdate(id, obj);
        res.status(200).json({
            message: 'Task Updated',
            success: true,
        });
    } catch(err) {
        res.status(500).json({
            message: 'Failed to update task', success: false
        })
    }
}

// Delete Task

const deleteTask  = async (req, res) =>{
    try{
        const id = req.params.id;
        await TaskModal.findByIdAndDelete(id);
        res.status(200).json({
            message: 'Deleted Task',
            success: true,
        });
    } catch(err) {
        res.status(500).json({
            message: 'Failed to delete task', success: false
        })
    }
}

module.exports = {
    createTask, fatchAllTasks, updateTask, deleteTask
}