import { Router } from 'express';
import { createCheckout } from '../controllers/payment.controller.js';

const router = Router();

router.get('/create-checkout', createCheckout);
router.get('/success', (req, res) => res.send('success'));
router.get('/cancel', (req, res) => res.send('cancel'));

export default router;
