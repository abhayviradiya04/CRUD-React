import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CategoryForm = () => {
  const { id } = useParams(); // category id if editing
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchCategoryById(id);
    }
  }, [id]);

  const fetchCategoryById = async (id) => {
    const res = await fetch(`http://localhost:5000/api/categories/${id}`);
    if (res.ok) {
      const data = await res.json();
      setName(data.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? 'PUT' : 'POST';
    const url = id ? `http://localhost:5000/api/categories/${id}` : 'http://localhost:5000/api/categories';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });

    navigate('/categories');
  };

  return (
    <div>
      <h2>{id ? 'Edit Category' : 'Add New Category'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '5px', width: '250px' }}
        />
        <button type="submit" style={{ marginLeft: '10px' }}>
          {id ? 'Update' : 'Add'}
        </button>
        <button type="button" onClick={() => navigate('/categories')} style={{ marginLeft: '10px' }}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
