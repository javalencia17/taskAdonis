'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {

    static get table(){
        return 'tasks'
    }

    static get primarykey(){
        return 'id'
    }


}

module.exports = Task
