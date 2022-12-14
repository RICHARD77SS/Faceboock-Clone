import React from 'react';

import { NavLink } from 'react-router-dom';

import { MarketplaceSt, MarketLeftSt, Header, Navbar, Filtros,Left, MarketRightSt, MarketFlexSt, IconDivSt } from './styles';
import { BsCameraReelsFill, BsFillGearFill, BsFillInboxFill, BsHouseDoorFill, BsShop, BsTagFill } from 'react-icons/bs';
import { SiFacebooklive } from 'react-icons/si';


import Button from '../Button';
import MarketConfig from '../MarketConfig';
import Input from '../Input';
import Hr from '../Hr';
import { MdGroups, MdNotifications } from 'react-icons/md';
import { HiShoppingBag } from 'react-icons/hi';
import { AiFillCar, AiFillHeart, AiOutlineRight } from 'react-icons/ai';
import { GiFrogFoot, GiHouse, GiRetroController, GiRun, GiSmartphone, GiSpanner } from 'react-icons/gi';
import { FaGuitar, FaPenAlt, FaTshirt, FaUtensilSpoon } from 'react-icons/fa';
import AllProducts from '../MarketAll';

const Marketplace = () => {
  const [config, setConfig] = React.useState(false)
  return (
    <MarketplaceSt>
      <Left></Left>
      <MarketLeftSt>
        <Header>
          <MarketFlexSt>
            <h3>Marketplace</h3>
            <Button onClick={() => setConfig(true)} className='btn-config'>
              <BsFillGearFill />
            </Button>
            {config ?
              <>
                <MarketConfig />
                <Button onClick={() => setConfig(false)} className='close-config'></Button>
              </>
              : null}
          </MarketFlexSt>
          <Input placeholder='    Pesquisar no Marketplace' className='input' />
        </Header>
        <Navbar>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <BsShop />
            </IconDivSt>
            <p>Navegar por tudo</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <SiFacebooklive />
            </IconDivSt>
            <p>Compras ao vivo</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <MdNotifications />
            </IconDivSt>
            <p>Notifica????es</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <BsFillInboxFill />
            </IconDivSt>
            <p>Caixa de Entrada</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <HiShoppingBag />
            </IconDivSt>
            <p>Compra</p>
            <AiOutlineRight className='arrowright' />
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <BsTagFill />
            </IconDivSt>
            <p>Venda</p>
            <AiOutlineRight className='arrowright b'/>
          </NavLink>
          <Button className='addClass'>+ Criar novo classificado</Button>
          <Filtros>
            <h4>Filtros</h4>
            <Button>Filtername here</Button>
            <Hr />
          </Filtros>
          <h4 className='categories'>Categorias</h4>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <AiFillCar />
            </IconDivSt>
            <p>Ve??culos</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <BsHouseDoorFill />
            </IconDivSt>
            <p>Loca????o de im??veis</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <GiHouse />
            </IconDivSt>
            <p>Artigos dom??sticos</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <GiRun />
            </IconDivSt>
            <p>Artigos esportivos</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <GiFrogFoot />
            </IconDivSt>
            <p>Artigos para animais de estima????o</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <BsTagFill />
            </IconDivSt>
            <p>Artigos para escrit??rio</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <GiRetroController />
            </IconDivSt>
            <p>Brinquedos e jogos</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <BsTagFill />
            </IconDivSt>
            <p>Classificados</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <GiSmartphone />
            </IconDivSt>
            <p>Eletr??nicos</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <BsCameraReelsFill />
            </IconDivSt>
            <p>Entretenimento</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <AiFillHeart />
            </IconDivSt>
            <p>Fam??lia</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <FaPenAlt />
            </IconDivSt>
            <p>Hobbies</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <FaGuitar />
            </IconDivSt>
            <p>Instrumentos musicais</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <BsTagFill />
            </IconDivSt>
            <p>Itens gratuitos</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <FaUtensilSpoon />
            </IconDivSt>
            <p>Jardim e ambientes externos</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <GiSpanner />
            </IconDivSt>
            <p>Suprimentos para reforma residencial</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <BsHouseDoorFill />
            </IconDivSt>
            <p>Venda de im??veis residenciais</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <FaTshirt />
            </IconDivSt>
            <p>Vestu??rio</p>
          </NavLink>
          <NavLink className='navlink' to='/marketplace/'>
            <IconDivSt>
              <MdGroups />
            </IconDivSt>
            <p>Grupos de compra e venda</p>
          </NavLink>
        </Navbar>
      </MarketLeftSt>
      <MarketRightSt>
        <AllProducts />
      </MarketRightSt>
    </MarketplaceSt>
  )
}

export default Marketplace;