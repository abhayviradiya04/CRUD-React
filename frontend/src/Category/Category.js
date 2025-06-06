import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await fetch('http://localhost:5000/api/categories');
    const data = await res.json();
    setCategories(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      await fetch(`http://localhost:5000/api/categories/${id}`, { method: 'DELETE' });
      fetchCategories();
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <button onClick={() => navigate('/category-form')}>Add New Category</button>
      <table border="1" cellPadding="5" style={{ marginTop: '10px', width: '100%', maxWidth: '400px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(cat => (
            <tr key={cat._id}>
              <td>{cat.name}</td>
              <td>
                <button onClick={() => navigate(`/category-form/${cat._id}`)}>Edit</button>{' '}
                <button onClick={() => handleDelete(cat._id)}>Delete</button>
              </td>
            </tr>
          ))}
          {categories.length === 0 && (
            <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>No categories found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
