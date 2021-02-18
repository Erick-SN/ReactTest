import { useState } from 'react';
import AddCategory from './AddCategory';
import GiftGrid from './GiftGrid';

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h2>Encuentra tus gifts preferidos!</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
