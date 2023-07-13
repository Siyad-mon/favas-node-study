import express from 'express'
const router = express.Router()
import { getAdminDetails } from './controller.js'

router.get('/',getAdminDetails)


export default router