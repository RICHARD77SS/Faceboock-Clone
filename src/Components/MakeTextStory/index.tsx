import { MakeStorySt } from './styles';
import { IoText } from 'react-icons/io5'
import Button from '../Button';

const MakeTextStory = () => {
  
  return (
    <Button>
      <MakeStorySt>
        <div className="icon">
          <IoText />
        </div>
        <p>Criar um story de texto</p>
      </MakeStorySt>
    </Button>
  )
}

export default MakeTextStory;