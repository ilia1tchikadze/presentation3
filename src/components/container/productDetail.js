import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../redux/action/actionPro';

function ProductDetail() {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(product);
  const { productId } = useParams();
  const fetchproductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log('Error', err);
      });
    dispatch(selectProduct(response.data));
    console.log(product);

    useEffect(() => {
      if (productId && productId !== '') {
        fetchproductDetail();
      }
    }, [productId]);
  };
  return (
    <div>
      {fetchproductDetail}
    </div>
  );
}

export default ProductDetail;
