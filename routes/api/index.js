const router = require("express").Router();
const workRoutes = require("./work");

// Book routes
router.use("/work", bookRoutes);

module.exports = router;
