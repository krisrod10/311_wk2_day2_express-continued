const express = require("express");

const router = express.Router();

const controller = require("../controller/contacts");

/**
 * GET comments
 * GET comments/:id
 * POST comments
 * 
 */

// route to fecth all comments
router.get("/contacts", controller.list);
// route to pull specific contacts by its id
router.get("/contacts/:id", controller.show);
// router to create a new comment
router.post("/comments", controller.create);

module.exports = router;