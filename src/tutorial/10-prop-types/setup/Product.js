import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'
const Product = ({name, image, price}) => {
  const url=image && image.url
  return (
    <article className="product">
    <img src={url || defaultImage} alt={name || 'default name'}></img>
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   image: defaultImage,
//   name:'default',
//   price: '$3.99',
// };
export default Product;
