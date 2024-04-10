const db = require('./db')

modules.exports = {
    createStore: () => {
        const users = db.map(user => {
            return user
        })
        return { users }
    }
}