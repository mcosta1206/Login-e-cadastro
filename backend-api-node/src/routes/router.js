const router = require("express").Router();

const servicesRouter = require("./services");

router.use("/", servicesRouter);

const userRouter = require("./users");

router.use("/", userRouter);

module.exports = router;