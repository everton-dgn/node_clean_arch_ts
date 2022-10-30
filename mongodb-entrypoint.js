/* eslint-disable no-undef */
db = db.getSiblingDB('backend') // nome do banco
db.createUser({
  user: 'mongo',
  pwd: 'mongo',
  roles: [
    {
      role: 'dbOwner',
      db: 'backend'
    }
  ]
})
