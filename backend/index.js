import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import categoryRoutes from './Routes/categoryRoutes.js';
import incomeRoutes from './Routes/incomeRoutes.js';
import expenseRoutes from './Routes/expenseRouter.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/categories', categoryRoutes);
app.use('/api/incomes', incomeRoutes);
app.use('/api/expenses', expenseRoutes);

/*
// Summary route (optional)
const Income = require('./models/Income');
const Expense = require('./models/Expense');
app.get('/api/summary', async (req, res) => {
  const totalIncome = await Income.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }]);
  const totalExpense = await Expense.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }]);

  res.json({
    totalIncome: totalIncome[0]?.total || 0,
    totalExpense: totalExpense[0]?.total || 0,
    remainingBalance: (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
  });
});
*/


// MongoDB connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));