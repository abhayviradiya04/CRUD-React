import Expense from "../Models/Expense.js";

export const getAllExpense=async (req,res)=>{
    const expense=await Expense.find().populate('category')
    res.json(expense);
}

export const getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id).populate('category');
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addExpense = async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.json(expense);
};

export const updateExpense = async (req, res) => {
  const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(expense);
};

export const deleteExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: 'Expense deleted' });
};
