const user = require('./users')

module.exports = [
  {
    id: 12,
    title: 'Some nice project',
    manager: user[0],
    developers: [...user],
    available: true,
    dateMade: '12345',
    description: 'Test project'
  }
]
