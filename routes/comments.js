const express = require("express");

const router = express.Router();

const controller = require("../controllers/comments");
/**
 * GET comments
 * GET comments/:id
 * POST comments
 * 
 */



// route to fetch all comments
router.get("/comments", controller.list);
// route to pull specific comment bi its id
router.get("/comments/:id", controller.show);
// route to create a new comment
router.post("/comments", controller.create);


module.exports = router;