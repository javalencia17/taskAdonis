'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('tasks','TaskController.index')
Route.get('tasks/add','TaskController.add')
Route.post('tasks','TaskController.store')
Route.post('task/modalEdit','TaskController.actionModalEdit')
Route.post('task/editTask','TaskController.actionEditTask')
Route.post('task/deleteTask','TaskController.actionDeleteTask')











