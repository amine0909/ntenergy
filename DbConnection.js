const sequelize = require("sequelize")

const SQlConnection = new sequelize("ntenergy","root","", {
    dialect: "mysql"
})

SQlConnection.authenticate()
    .then((res) => {
        console.log('Connection has been established successfully.')
    })
    .catch(err => {console.error('Unable to connect to the database:', err)})


module.exports = SQlConnection