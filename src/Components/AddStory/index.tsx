import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../Button';
import ModalAddStory from '../ModalAddStory';
import { StorySt } from './styles';

const AddStory = () => {
  const [addStory, setAddStory] = React.useState(false);

  const open = () => {
    setAddStory(true)
    document.body.style.overflow = 'hidden'
  }
  const close = () => {
    setAddStory(false)
    document.body.style.overflow = 'unset'
  }
  return (
    <>
      
      <Button onClick={() => open()}>
        <StorySt>
          <img src='https://img.freepik.com/fotos-gratis/mulher-alegre-feliz-se-sentindo-animada-por-vencer-gritando-e-comemorando-a-vitoria-com-os-bracos-erguidos-torcendo-com-entusiasmo-pelo-sucesso-e-triunfo-desfrutando-da-vitoria-no-estudio_482257-46602.jpg?w=740&t=st=1660427508~exp=1660428108~hmac=c1be4e3cab978e87868475f0461bdebe2e071fbd5bacb733f403b7d5f328edd4' alt='Story-background' />
          <Button className='bt-add'>
            <div className="div-ico">
              +
            </div>
            <p>Criar story</p>
          </Button>
        </StorySt>
      </Button>
      {addStory ?
        <ModalAddStory>
          <Button className='btn-close' onClick={() => close()}><AiOutlineClose /></Button>
        </ModalAddStory>
        : null}
    </>
  )
}

export default AddStory;