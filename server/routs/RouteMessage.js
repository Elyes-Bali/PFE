const sendemail = require ('../sendemailconfig/sendemail');
const express = require("express");
const router = express.Router();

router.post("/mailer", async (req, res) => {
    try {
        await sendemail();
        res.send('work')
    } catch (error) {
        console.log(error)
    }
    
    

})


module.exports = router;

