import { MakeStorySt } from './styles';
import { MdOutlinePhotoLibrary } from 'react-icons/md';
import Button from '../Button';

const MakePhotoStory = () => {
  
  return (
    <Button>
      <MakeStorySt>
        <div className="icon">
          <MdOutlinePhotoLibrary />
        </div>
        <p>Criar um story de foto</p>
      </MakeStorySt>
    </Button>
  )
}

export default MakePhotoStory;