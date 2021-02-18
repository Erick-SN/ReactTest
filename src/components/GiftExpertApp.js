import { useState } from 'react';
import AddCategory from './AddCategory';

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['DBZ', 'HXH', 'OP']);

  return (
    <>
      <h2>Encuentra tus gifts preferidos!</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
