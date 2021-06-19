import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setProduct } from '../redux/action/actionPro';
import ProductComponent from './productComponent';

function ProductListing() {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(product);
  const fetchProduct = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
