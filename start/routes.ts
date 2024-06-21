/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'




router.on('/').renderInertia('home', { version: 6 })

router.resource('users', UsersController).as('users')

