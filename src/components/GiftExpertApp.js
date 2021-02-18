import { useState } from 'react';
import AddCategory from './AddCategory';

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['DBZ', 'HXH', 'OP']);
  const handleAddCategory = (e) => {
    e.preventDefault();
    setCategories([...categories, 'NNT']);
  };

  return (
    <>
      <h2>Encuentra tus gifts preferidos!</h2>
      <AddCategory />
      <hr />
      <button onClick={handleAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
