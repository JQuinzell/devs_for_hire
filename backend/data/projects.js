const user = require('./users')

module.exports = [
  {
    title: 'Some nice project',
    manager: user[0],
    developers: [...user],
    available: true,
    dateMade: '12345',
    description: 'Test project'
  }
]
