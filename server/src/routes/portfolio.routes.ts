import { Router } from 'express';
const router = Router();

// import multer from '../libs/multer';


// import {gettingWroks} from './portfolio.controller'

import * as PortfolioCtrl  from '../controllers/portfolio.controller';


router.get('/portfolio', PortfolioCtrl.gettingWorks);
router.post('/portfolio', PortfolioCtrl.CreateWork);
router.get('/portfolio/:id', PortfolioCtrl.gettingOneWork);
router.delete('/portfolio/:id', PortfolioCtrl.DeleteWork);
router.put('/portfolio/:id', PortfolioCtrl.EditWork);

export default router
