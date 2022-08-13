import React from 'react';

import { PatrocSt, PromoSt, BlockSt } from './styles';

const Patrocinado = () => {
  
  return (
    <PatrocSt>
      <h4>Patrocinado</h4>
      <PromoSt>
        <img src="https://img.freepik.com/psd-gratuitas/folheto-de-modelo-de-estilo-de-vida-de-fitness_23-2148782350.jpg?w=360&t=st=1660400333~exp=1660400933~hmac=f9e289067b6857fedf7e4b93f5856952631c8cf1273139817cfb60fa40e5233f" alt="" />
        <BlockSt>
          <h5>Promo Name</h5>
          <p>site.com.br</p>
        </BlockSt>
      </PromoSt>
      <PromoSt>
        <img src="https://img.freepik.com/psd-gratuitas/folheto-de-modelo-de-estilo-de-vida-de-fitness_23-2148782350.jpg?w=360&t=st=1660400333~exp=1660400933~hmac=f9e289067b6857fedf7e4b93f5856952631c8cf1273139817cfb60fa40e5233f" alt="" />
        <BlockSt>
          <h5>Promo Name</h5>
          <p>site.com.br</p>
        </BlockSt>
      </PromoSt>
    </PatrocSt>
  )
}

export default Patrocinado;