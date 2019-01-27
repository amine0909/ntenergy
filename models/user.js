const sequelize = require("../DbConnection")
const Sequelize = sequelize.Sequelize


const userModel = sequelize.define("user", {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
})


module.exports = userModel