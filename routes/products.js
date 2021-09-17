const express = require("express");

const router = express.Router();

const controller = require("../controllers/products");
const { route } = require("./comments");

/**
 * GET prodcuts
 * GET products/:id
 * POST products
 */

// route to fetch all products
router.get("/products", controller.list);
// route to pull specific by its id
router.get("/products/:id", controller.show);
// route to create a new product
router.post("/products", controller.create);


module.exports = router;