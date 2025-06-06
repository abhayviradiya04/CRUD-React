import Income from "../Models/Income.js";

export const getAllIncome = async (req, res) => {
  try {
    const income = await Income.find().populate('category'); // fixed field name
    res.json(income);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getIncomeById = async (req, res) => {
  try {
    const income = await Income.findById(req.params.id).populate('category');
    if (!income) return res.status(404).json({ message: 'Income not found' });
    res.json(income);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addIncome = async (req, res) => {
  try {
    const income = new Income(req.body);
    await income.save();
    res.status(201).json(income);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateIncome = async (req, res) => {
  try {
    const income = await Income.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!income) return res.status(404).json({ message: 'Income not found' });
    res.json(income);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteIncome = async (req, res) => {
  try {
    await Income.findByIdAndDelete(req.params.id); // fixed model call
    res.json({ message: "Income deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
