const sequelize = require("../DbConnection")
const Sequelize = sequelize.Sequelize



const commandeModel = sequelize.define("reservation", {
    name_client: {
        type: Sequelize.STRING
    },
    email_client: {
        type: Sequelize.STRING
    },
    phone_client: {
        type: Sequelize.STRING
    },
    societe: {
        type: Sequelize.STRING
    },
    fax: {
        type: Sequelize.STRING
    },
    subject: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
})

module.exports = commandeModel