const express = require("express");

const router = express.Router();

const controller = require("../controllers/vehciles");

/**
 * GET vehciles
 * GET vehciles/:id
 * POST vehciles
 */

// route to fetch all vehicles
router.get("/vehciles", controller.list);
// route to pull specific vehciles by its id
router.get("/vehciles/:id", controllers.show);
// route to create a new vehicle
router.post("vehicles", controller.create);


module.exports = router;