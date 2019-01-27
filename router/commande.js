const router = require("express").Router()
const commandeModel = require("../models/commande")


router.post("/commande",(req,res) => {

    const { 
        name_client, 
        email_client,
        phone_client,
        company,
        fax,
        subject,
        description
    } = req.body
    commandeModel.insertOrUpdate({
        name_client: name_client,
        email_client: email_client,
        phone_client: phone_client,
        societe:company,
        fax:fax,
        subject: subject,
        description: description
    }) .then((insert) => {
        if(insert == true) {
            return res.status(201).json("created")
        }
    })
    .catch((err) => {console.log(err)})
})

module.exports = router