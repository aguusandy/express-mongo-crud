import { Router } from "express";

const router = Router();

router.get('/algorithms', (req,res) =>{
    res.send('get algorithms');
});

export default router;