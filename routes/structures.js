import { Router } from "express";
import {findAllStructures,createStructure,findStructureById,deleteStructureById,updateStructureById} from "../controllers/structures.js";

const router = Router();

// get all structures in database
router.get('/structures', findAllStructures);

// get a single structure by id
router.get('/structures/:id', findStructureById)

// insert a new structure in the database
router.post('/structures', createStructure);

// update a structure
router.put('/structures/:id',updateStructureById);

// delete a structure using the id to filter
router.delete('/structures/:id', deleteStructureById)

export default router;