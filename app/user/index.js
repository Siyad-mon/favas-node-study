import express from 'express'
const router = express.Router()
import { getControl } from './controller.js'

router.get('/', getControl)



export default router