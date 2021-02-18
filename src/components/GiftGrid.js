import GiftItem from './GiftItem';
import { useFetch } from '../hooks/useFetch';
const GiftGrid = ({ category }) => {
  const { data, loading } = useFetch(category);
  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-gift">
        {data.map((img) => (
          <GiftItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;
