import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {

    public async index({ inertia }: HttpContext) {


        let data = {
            users: await User.all(),
            title: 'Users',
            subtitle: 'List of users',
        }
        return inertia.render('users/index', data)
    }
}