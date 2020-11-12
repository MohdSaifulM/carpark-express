const router = require("express").Router();
const Carpark = require("../models/carpark.model");

router.get("/", async (req, res) => {
    let carpark = await Carpark.find();
    try {
        res.render("carparks/index", { carpark });
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;