import Category from '../Models/Category.js';


export const getAllCategory=async (req,res)=>{
    const category=await Category.find();
    res.json(category);
}

export const getCategoryById=async (req,res)=>{
    try {
        const category=await Category.findById(req.params.id);
        if(!category){
            res.status(404).json({
                message:'Category Not Found:'
            })
        }
        res.json(category)
        
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}

export const addCategory=async (req,res)=>{
    const category=new Category(req.body);
    await category.save();
    res.json(category);
}

export const updateCategory=async (req,res)=>{
    const category=await Category.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(category);
}

export const deleteCategory=async (req,res)=>{
    await Category.findByIdAndDelete(req.params.id);
    res.json({message:"Category Delete"});
}