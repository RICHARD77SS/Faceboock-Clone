import React from 'react';
import { Product } from './styles'

interface ProductsProps {
  productImage?: string;
  productPrice?: string;
  productName?: string;
  productLocation?: string;
}

const Products = (Props: ProductsProps) => {
  return (
    <Product>
      <img src={Props.productImage} alt="" />
      <h4>{Props.productPrice}</h4>
      <span>{Props.productName}</span>
      <p>{Props.productLocation}</p>
    </Product>
  )
}

export default Products;