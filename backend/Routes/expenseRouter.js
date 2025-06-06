import express from 'express';
import {getAllExpense,getExpenseById,addExpense,updateExpense,deleteExpense} from '../Controller/expenseCoontroller.js';

const router=express.Router();

router.get('/',getAllExpense);
router.get('/:id',getExpenseById);
router.post('/',addExpense);
router.put('/:id',updateExpense);
router.delete('/:id',deleteExpense);

export default router;