const { createRole, insertUser, insertPost, getAllData } = require("../controller/demoController");
const { cache } = require("../middleware/authentication");

const router = require("express").Router();

router.post("/role", cache, createRole)
router.post("/user", cache, insertUser)
router.post("/post", cache, insertPost)
router.get("/", cache, getAllData)

module.exports = router;