const GiftItem = ({ id, title, url }) => {
  return (
    <>
      <div className="card">
        <img src={url} alt="animated" />
        <p>{title}</p>
      </div>
    </>
  );
};

export default GiftItem;
