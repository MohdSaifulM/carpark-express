const router = require("express").Router();
const Carpark = require("../models/carpark.model");
const Vehicle = require("../models/vehicle.model");

router.get("/:id", async (req, res) => {
    try {
        let carpark = await Carpark.findById(req.params.id).populate("currentVehicles");
        res.render("carparks/show", { carpark });
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;