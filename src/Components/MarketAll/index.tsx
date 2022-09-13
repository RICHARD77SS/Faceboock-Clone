import React from 'react';
import { ContainerSt, ContentSt, HeaderSt, ListProductsSt } from './styles'

import ProductInfo from './ProductsInfo.json'
import Products from '../Product';

const AllProducts = () => {
  return (
    <ContainerSt>
      <ContentSt>
        <HeaderSt>
          <h3>Seleções de hoje</h3>
          <a href="/">Location reference 15km</a>
        </HeaderSt>
        <ListProductsSt>
          {ProductInfo.map((Infos) => {
            return (
              <Products productImage={Infos.productImage}
                productPrice={Infos.productPrice}
                productName={Infos.productName}
                productLocation={Infos.ProductLocation}
              /> 
             )
           })}
        </ListProductsSt>
      </ContentSt>
    </ContainerSt>
  )
}

export default AllProducts;