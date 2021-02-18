import { useEffect, useState } from 'react';
import GiftItem from './GiftItem';
const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);
  const getGifs = async () => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=LMZJRFlqIoXoNqXiofmZPL9LPBhW33rU`;
    const response = await fetch(URL);
    const { data } = await response.json();
    const gifts = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }));
    setImages(gifts);
  };
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
