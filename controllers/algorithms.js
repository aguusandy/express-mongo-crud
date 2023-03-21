import algorithmModel from "../models/algorithms.js";

export const findAllAlgorithms = async (req,res) =>{
    try {
        const Algorithms = await algorithmModel.find();
        if (Algorithms.length > 0){
            res.json(Algorithms);
        }else{
            res.status(404).json({message:"Not Found Any Algorithm"});
        }
    } catch (error) {
        res.status(404).json({message:"Error While Getting Algorithms"});
    }
    
}

export const findAlgorithmById = async (req,res) =>{
    const id_ = req.params.id;
    try {
        const Algorithm = await algorithmModel.findById(id_);
        if(Algorithm !== null){
            res.json(Algorithm);
        }else{
            res.status(404).json({message:"Error Algorithm Not Found"});
        }
    } catch (error) {
        res.status(404).json({message:"Error While Getting Algorithm"});
    }   
}

export const createAlgorithm = async (req,res) =>{
    const newAlgorithm =  new algorithmModel({ 
        name: req.body.name,
        description: req.body.description,
        worstorder: req.body.worstorder,
        bestorder: req.body.bestorder
    });
    try {
        const AlgorithmSaved = await newAlgorithm.save();
        res.json(AlgorithmSaved);
    } catch (error) {
        res.status(404).json({message:"Error While Creating Algorithm"});
    }
}

export const updateAlgorithmById = async(req,res) =>{
    try {
        if(req.body.name == null || req.body.description == null || req.body.worstorder || req.body.bestorder){
            return res.status(404).json({message: 'Fields incomplet'});
        }
        const Algorithm = await algorithmModel.findByIdAndUpdate(req.params.id,req.body);
        console.log(Algorithm);
        if(Algorithm !== null){
            res.json(Algorithm);
        }else{
            res.status(404).json({message:"Error Algorithm Not Found"});
        }
    } catch (error) {
        res.status(404).json({message:"Error While Updating Algorithm"});
    }
}

export const deleteAlgorithmById = async (req,res) =>{
    try {
        const id_ = req.params.id;
        await algorithmModel.findByIdAndDelete(id_);
        res.json({message: 'Algorithm Deleted'});
    } catch (error) {
        res.status(404).json({message:"Error While Deleting Algorithm"});
    }   
}
