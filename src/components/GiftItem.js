const GiftItem = ({ id, title, url }) => {
  return (
    <>
      <img src={url} alt="animated" />
      <p>{title}</p>
    </>
  );
};

export default GiftItem;
