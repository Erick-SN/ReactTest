import PropTypes from 'prop-types';
const GiftItem = ({ title, url }) => {
  return (
    <>
      <div className="card animate__animated animate__fadeIn">
        <img src={url} alt="animated" />
        <p>{title}</p>
      </div>
    </>
  );
};
GiftItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default GiftItem;
