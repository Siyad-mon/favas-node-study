import express from 'express'
import { getProduct,getNewProduct,deleteProduct,updateProduct } from './controller.js';

const router = express.Router();

router.get('/', getProduct);
router.post('/new-product', getNewProduct);
router.delete('/del-product', deleteProduct)
router.patch('/upd-product/:id', updateProduct)

export default router
