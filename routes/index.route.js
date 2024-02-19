const authRoutes = require("./auth.route")
const express =require("express")
const router = express.Router()
const userRoutes = require("./user.route")
const feedbackRoutes = require("../routes/feedback.route")
const orderRoutes = require("../routes/order.route")
const designTypesRoutes = require("../routes/design-types.route")
const aboutRoutes = require("../routes/about.route")
const experienceRoutes = require("../routes/experience.route")

router.use("/auth",authRoutes)
router.use("/user",userRoutes)
router.use("/feedback" ,  feedbackRoutes)
router.use("/order" ,  orderRoutes)
router.use("/design-types" ,  designTypesRoutes)
router.use("/about" ,  aboutRoutes)
router.use("/experience" ,  experienceRoutes)

module.exports = router