import express from 'express';
import { getCategoryById,getAllCategory,addCategory,updateCategory,deleteCategory } from '../Controller/categoryController.js';
const router=express.Router();



router.get('/',getAllCategory);
router.get('/:id',getCategoryById);
router.post('/',addCategory);
router.put('/:id',updateCategory);
router.delete('/:id',deleteCategory);

export default router;