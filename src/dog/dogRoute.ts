import {Router} from 'express'

import * as dogController from './dogController'

const router = Router()

router.get("/",dogController.getAllDog)

export default router;