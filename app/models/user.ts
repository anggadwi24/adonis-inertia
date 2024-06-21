import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['username', 'email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column()
  declare username: string



  @column({ serializeAs: null })
  declare password: string


 


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column()
  declare createdBy: string | null


  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
  
  @column()
  declare updatedBy: string | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare deletedAt: DateTime | null

  @column()
  declare deletedBy: string | null
}