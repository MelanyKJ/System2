import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            where: {
                userId: req.user.id
            },
            include: 'User'
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createTasks = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const newTask = await Task.create({
            title,
            description,
            date,
            userId: req.user.id
        });
        res.json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//LISTAR UNO
export const getTask = async (req, res) =>{
    const task = await Task.findById(req.params.id).populate('user');
    if(!task) return res.status(404).json({message:  'Task no encontrada'})

    res.json(task)

};

//ELIMINAR
export const deleteTasks = async (req, res) =>{
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({message:  'Task eliminada'})
return res.sendStatus(204);
};

export const updateTask = async (req, res) =>{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body,{
        //YA QUE SIN ESTO NO ME DEVOLVERIA EL DATO NUEVO SINO EL ANTIGUNO
        new: true
    })
    if(!task) return res.status(404).json({message:  'Task no encontrada'})
        res.json(task)
};

