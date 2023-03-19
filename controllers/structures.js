
import structureModel from "../models/structures.js";

export const findAllStructures = async (req,res) =>{
    try {
        const structures = await structureModel.find();
        if (structures.length > 0){
            res.json(structures);
        }else{
            res.status(404).json({message:"Not Found Any Structured"});
        }
    } catch (error) {
        res.status(404).json({message:"Error While Getting Structures"});
    }
    
}

export const findStructureById = async (req,res) =>{
    const id_ = req.params.id;
    try {
        const structure = await structureModel.findById(id_);
        if(structure !== null){
            res.json(structure);
        }else{
            res.status(404).json({message:"Error Structure Not Found"});
        }
    } catch (error) {
        res.status(404).json({message:"Error While Getting Structure"});
    }   
}

export const createStructure = async (req,res) =>{
    const newStructure =  new structureModel({ 
        name: req.body.name,
        description: req.body.description
    });
    try {
        const structureSaved = await newStructure.save();
        res.json(structureSaved);
    } catch (error) {
        res.status(404).json({message:"Error While Creating Structure"});
    }
}

export const updateStructureById = async(req,res) =>{
    try {
        if(req.body.name == null || req.body.description == null){
            return res.status(404).json({message: 'Fields incomplet'});
        }
        const structure = await structureModel.findByIdAndUpdate(req.params.id,req.body);
        console.log(structure);
        if(structure !== null){
            res.json(structure);
        }else{
            res.status(404).json({message:"Error Structure Not Found"});
        }
    } catch (error) {
        res.status(404).json({message:"Error While Updating Structure"});
    }
}

export const deleteStructureById = async (req,res) =>{
    try {
        const id_ = req.params.id;
        await structureModel.findByIdAndDelete(id_);
        res.json({message: 'Structure Deleted'});
    } catch (error) {
        res.status(404).json({message:"Error While Deleting Structure"});
    }   
}
