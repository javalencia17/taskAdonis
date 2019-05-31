'use strict'

const  Task = use('App/Models/Task')

class TaskController {

    //=======================================
    //
    // Nota : los { params } dentro de la una
    // función async es para cuando es un get 
    // que lleva los parametros en la ruta
    //
    //=======================================




    /**
     * realiza la busqueda de todas las tareas y
     * las manda a una vista
     *
     * @return view
     */

    async index({view}){
        const tasks = await Task.all()

        return view.render('tasks.index',{
            tasks: tasks.toJSON()
        })
    }

    /**
     * realiza vista para agregar
     *
     * @return view
     */

    async add({view}){
        return view.render('tasks.add')
    }

     /**
     * realiza el insert y redirige a la vista que las 
     * visualiza todas las tareas
     *
     * @return view
     */

    async store( {request, response} ){
        const task = new Task()

        task.title = request.input('title')
        task.body = request.input('body')
        await task.save()

        return response.redirect('/tasks1')
    }

      /**
     * busca el registro por id lo manda a una vista
     *
     * @return view
     */

    async actionModalEdit({ request, view }){
        const task = await Task.find(request.input('id'))
        //return response.send(task);
        return view.render('ajax.ajax_task.ajaxModalEditTask',{
            task
        })
    }

    /**
     * busca el registro por id y lo edita con los parametros que llegen
     *
     * @return view
     */
    async actionEditTask({ request ,response }){

        const task = await Task.find(request.input('id'))

        task.title = request.input('title')
        task.body = request.input('body')
        await task.save();

        return response.route('/tasks1')

    }

    /**
     * busca el registro por id y lo elimina
     *
     * @return view
     */

    async actionDeleteTask({ request , response }){

        const task = await Task.find(request.input('id'))
        await task.delete()

        return response.route('/tasks1')
    }

}

module.exports = TaskController
