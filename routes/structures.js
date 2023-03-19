import { Router } from "express";

const router = Router();

router.get('/structures', (req,res) =>{
    res.send('get structures');
});

export default router;