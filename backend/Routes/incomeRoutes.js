import express from 'express';
import {getAllIncome,getIncomeById,addIncome,updateIncome,deleteIncome} from '../Controller/incomeController.js';

const router=express.Router();

router.get('/',getAllIncome);
router.get('/:id',getIncomeById);
router.post('/',addIncome);
router.put('/:id',updateIncome);
router.delete('/:id',deleteIncome);

export default router;