const Query = require('./query')

module.exports = {
    Query,
    Mutation: {
        createAccount: (_, args) => {
            return args
        },
        createProject: (_, args) => {
            return args
        }
    }
}
