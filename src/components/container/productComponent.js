import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import css from './product.module.css';

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const {
      id, title, price, description, image,
    } = product;
    return (
      <div className="card" key={id}>
        <Link to={`/product/${id}`} className={css.link}>
          <img src={image} className={css.card_img_top} alt={title} />
          <ul className="list-group list-group-flush">
            <li className={'list-group-item', css.card_text}>{title}</li>
            <li className="list-group-item">
              $
              {price}
            </li>
            <li className="list-group-item">{description}</li>
          </ul>
        </Link>
      </div>
    );
  });

  return (
    <div className="cardList">
      {renderList}
    </div>
  );
}

export default ProductComponent;
