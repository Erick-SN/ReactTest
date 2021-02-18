import { useState } from 'react';
const AddCategory = () => {
  const [input, setInput] = useState();
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
      </form>
    </>
  );
};

export default AddCategory;
