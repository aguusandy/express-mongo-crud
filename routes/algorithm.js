import { Router } from "express";
import {findAllAlgorithms,findAlgorithmById,createAlgorithm,updateAlgorithmById,deleteAlgorithmById} from "../controllers/algorithms.js";

const router = Router();

// get all algorithms in database
router.get('/algorithms', findAllAlgorithms);

// get a single algorithm by id
router.get('/algorithms/:id', findAlgorithmById)

// insert a new algorithm in the database
router.post('/algorithms', createAlgorithm);

// update an algorithm
router.put('/algorithms/:id',updateAlgorithmById);

// delete ab algorithms using the id to filter
router.delete('/algorithms/:id', deleteAlgorithmById)

export default router;