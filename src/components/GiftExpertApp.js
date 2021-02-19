import { useState } from 'react';
import AddCategory from './AddCategory';
import GiftGrid from './GiftGrid';

const GiftExpertApp = ({ defaultCat }) => {
  const [categories, setCategories] = useState(defaultCat);

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
GiftExpertApp.defaultProps = {
  defaultCat: ['One Punch'],
};
export default GiftExpertApp;
