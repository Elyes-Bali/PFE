const sendemail = require ('../sendemailconfig/sendemail');
const express = require("express");
const router = express.Router();

router.post("/mailer", async (req, res) => {
    const {email ,message}=req.body;
    console.log(email)
    console.log(message)
    try {
        await sendemail({
            email:email,
            subject:'Opportunity',
            message:message,
        });
    

    } catch (error) {
        console.log(error)
    }

})


module.exports = router;

