import { useEffect, useState } from 'react';
import GiftItem from './GiftItem';
import { getGifs } from '../helpers/getGifts';
const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then((data) => setImages(data));
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-gift">
        {images.map((img) => (
          <GiftItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;
