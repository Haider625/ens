const express = require ('express');
const controler =require("../controler/ens")
const router = express.Router();

router.get("/",controler.getAll)
router.get("/:id", controler.getOne);
router.patch("/:id",controler.updateOne)
router.delete("/:id", controler.deleteOne);
router.post("/",controler.addOne);

module.exports = router;