const GiftItem = ({ id, title, url }) => {
  return (
    <>
      <div className="card animate__animated animate__fadeIn">
        <img src={url} alt="animated" />
        <p>{title}</p>
      </div>
    </>
  );
};

export default GiftItem;
