import React from 'react';
import { MenuSt, MenuContentSt, MenuBlockSt, MenuFlexSt, UlSt, ListSt,  ListBlock, TopBarSt } from './styles';
import { CgMenuGridO } from 'react-icons/cg';

import Criar from '../Criar'
import Button from '../Button';
import Input from '../Input';

const Menu = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const toggleMenu = () => {
    setOpenMenu(openMenu === true ? false : true);
  };
  return (
    <>
      <MenuSt>
        <Button className='btn-menu' onClick={() => toggleMenu()}><CgMenuGridO />
        </Button>
      </MenuSt>
      {openMenu ?
        <>
          <Button className='bd' onClick={() => setOpenMenu(false)}></Button>
          <MenuContentSt>
            <MenuBlockSt>
              <TopBarSt>
                <h2>Menu</h2>
              </TopBarSt>
              <MenuFlexSt>
                <UlSt>
                  <Input className='input-search' type='search'
                    placeholder='  Pesquisar no menu'
                  />
                  <h3>Social</h3>
                  <ListSt>
                    <img src='https://i.postimg.cc/DZtZh5N2/eventos.png' alt='' />
                    <ListBlock>
                      <span>Eventos</span>
                      <p>Organize e encontre eventos e outras coisas para fazer online e perto de você.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/tCSphBX2/amigos.png' alt='' />
                    <ListBlock>
                      <span>Amigos</span>
                      <p>Procure amigos ou pessias que você talvez conheça.</p>

                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/SRCKxC0c/grupos.png' alt='' />
                    <ListBlock>
                      <span>Grupos</span>
                      <p>Conecte-se com pessoas que compartilham seus interesses.</p>
                    </ListBlock>
                  </ListSt>

                  <ListSt>
                    <img src='https://i.postimg.cc/W19XVvKM/download.png' alt='' />
                    <ListBlock>
                      <span>Feed de Noticias</span>
                      <p>Veja publicações relevantes de pessoas e Páginas que voçê segue.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/MTcTggdP/favoritos.png' alt='' />
                    <ListBlock>
                      <span>Favoritos</span>
                      <p>View posts by Favorites</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/qv08zMSP/download.png' alt='' />
                    <ListBlock>
                      <span>Mais recentes</span>
                      <p>Veja as publicações mais recentes de amigos, grupos, Páginas e muito mais.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/26Bk0hSg/paginas.png' alt='' />
                    <ListBlock>
                      <span>Páginas</span>
                      <p>Descubra e conecte-se com empresas no Facebook</p>
                    </ListBlock>
                  </ListSt>
                  <div className='list-ent'>
                    <h3>Entretenimento</h3>
                  </div>
                  <ListSt>
                    <img src='https://i.postimg.cc/jqPqNH97/videodejogos.png' alt='' />
                    <ListBlock>
                      <span>Video de jogos</span>
                      <p>Assista e conecte-se com seus jogos e streamers favoritos.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/c47HqRBS/jogar.png' alt='' />
                    <ListBlock>
                      <span>Jogar</span>
                      <p>Jogue seus jogos favoritos.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/dVtJzz02/watch.png' alt='' />
                    <ListBlock>
                      <span>Watch</span>
                      <p>Um destino de video personalizado de acordo com os seus interesses e conexões.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/fTvwqwMW/videosaovivo.png' alt='' />
                    <ListBlock>
                      <span>Videos ao vivo</span>
                      <p>Assista a videos ao vivo populares do mundo</p>
                    </ListBlock>
                  </ListSt>
                  <div className='list-ent'>
                    <h3>Compras</h3>
                  </div>
                  <ListSt>
                    <img src='https://i.postimg.cc/htgXhytv/faceboockpay.png' alt='' />
                    <ListBlock>
                      <span>Facebook Pay</span>
                      <p>Uma forma segura e simples de pagar nos aplicativos que voce já usa.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/3xnxN3qf/marketplace.png' alt='' />
                    <ListBlock>
                      <span>Marketplace</span>
                      <p>Compre e venda na sua comunidade.</p>
                    </ListBlock>
                  </ListSt>
                  <div className='list-ent'>
                    <h3>Pessoal</h3>
                  </div>
                  <ListSt>
                    <img src='https://i.postimg.cc/Vk2wh50t/atividadedeanunciosrecentes.png' alt='' />
                    <ListBlock>
                      <span>Atividade de anúncios recente</span>
                      <p>Veja todos os anúncios com os quais você interagiu no Facebook.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/gcZjsFwr/lembran-as.png' alt='' />
                    <ListBlock>
                      <span>Lembranças</span>
                      <p>Navegue por fotos antigas, vídeos e publicações no Facebook.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/brxzhPbT/salvos.png' alt='' />
                    <ListBlock>
                      <span>Salvos</span>
                      <p>Encontre publicações, fotos e vídeos que você salvou para ver mais tarde.</p>
                    </ListBlock>
                  </ListSt>
                  <div className='list-ent'>
                    <h3>Profissional</h3>
                  </div>
                  <ListSt>
                    <img src='https://i.postimg.cc/YSD0ntfL/gerenciador-de-anuncios.png' alt='' />
                    <ListBlock>
                      <span>Gerenciador de Anúncios</span>
                      <p>Crie, gerencie e rastreie o desempenho dos seus anúncios.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/J4Cnd6Jx/gerenciadordenegocios.png' alt='' />
                    <ListBlock>
                      <span>Gerenciador de Negócios</span>
                      <p>Uma maneira melhor de gerenciar sua empresa no Facebook e no instagram, tudo em um único lugar</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/pVwhMXND/centraldeanuncios.png' alt='' />
                    <ListBlock>
                      <span>Central de Anúncios</span>
                      <p>Gerencie todos os anúncios que você criar nas Páginas, com recursos simplificados.</p>
                    </ListBlock>
                  </ListSt>
                  <div className='list-ent'>
                    <h3>Recursos da comunidade</h3>
                  </div>
                  <ListSt>
                    <img src='https://i.postimg.cc/Jhzt5sJW/doa-oesdedangue.png' alt='' />
                    <ListBlock>
                      <span>Doações de Sangue</span>
                      <p>Receba atualizações sobre doação de sangue perto de você.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/y8PkRmDP/climacentraldeinforma-oes.png' alt='' />
                    <ListBlock>
                      <span>Clima: Central de informações</span>
                      <p>Saiba mais sobre as mudanças climáticas e seus efeitos.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/TYnydMGB/covid19centraldeinforma-oes.png' alt='' />
                    <ListBlock>
                      <span>COVID-19: Central de informações</span>
                      <p>Veja as últimas dicas de prevenção, recursos da comunidade e atualizações de organizações de saúde.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/kXX760d2/ajudadacomunidade.png' alt='' />
                    <ListBlock>
                      <span>Ajuda da Comunidade</span>
                      <p>Envolva-se com a sua comunidade criando uma ação solidária, solicitado ou oferecendo ajuda ou fazendo voluntariado.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/cH0T49sS/download.png' alt='' />
                    <ListBlock>
                      <span>Saúde Emocional</span>
                      <p></p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/pLmxkKrx/campanhasdearrecada-aodefundos.png' alt='' />
                    <ListBlock>
                      <span>Campanhas de arrecadação de fundos</span>
                      <p>Doe e arrecade dinheiro para organizações sem fins lucrativos e causas pessoais.</p>
                    </ListBlock>
                  </ListSt>
                  <div className='list-ent'>
                    <h3>Mais da Meta</h3>
                  </div>
                  <ListSt>
                    <img src='https://i.postimg.cc/k5GXtk3J/messager.png' alt='' />
                    <ListBlock>
                      <span>Messanger</span>
                      <p>Converse instantaneamente com seus amigos e conexões.</p>
                    </ListBlock>
                  </ListSt>
                  <ListSt>
                    <img src='https://i.postimg.cc/TPs2jCfr/messagerkids.png' alt='' />
                    <ListBlock>
                      <span>Messager Kids</span>
                      <p>Permita que as crianças enviem mensagens para amigos próximos e familiares.</p>
                    </ListBlock>
                  </ListSt>

                </UlSt>
                <Criar />
              </MenuFlexSt>
            </MenuBlockSt>
            </MenuContentSt>
          </>
        : null}
    </>
  )
}

export default Menu;