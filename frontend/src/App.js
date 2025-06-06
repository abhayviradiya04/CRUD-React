import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import CategoryList from './Category/Category';
import CategoryForm from './Category/AddEditForm';


function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <Link to="/categories" style={{ marginRight: 10 }}>Category</Link>
       
      </nav>

       <Routes>
        {/* Category routes */}
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/category-form" element={<CategoryForm />} />
        <Route path="/category-form/:id" element={<CategoryForm />} />

    
        
      </Routes>

    
    </Router>
  );
}

export default App;
