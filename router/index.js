import express from 'express'
const router = express.Router()

import userRouter from '../app/user/index.js'
import productRouter from '../app/product/index.js'
import adminRouter from '../app/admin/index.js'

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/admin', adminRouter)



export default router