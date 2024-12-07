const express=require('express')
const { allproducts, addproducts } = require('../controllers/productController')
const router=express.Router()

router.route('/ghee').get(allproducts)
router.route('/newghee').post(addproducts)

module.exports=router