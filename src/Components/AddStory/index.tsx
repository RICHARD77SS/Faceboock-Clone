import React from 'react'

import Button from '../Button';

import { StorySt } from './styles';
import { Link } from 'react-router-dom';

const AddStory = () => {

  return (
    <>
      
      <Link to='/story/'>
        <Button >
          <StorySt>
          
            <Button className='bt-add'>
              <div className="div-ico">
                +
              </div>
              <p>Criar story</p>
            </Button>
          </StorySt>
        </Button>
      </Link>
    </>
  )
}

export default AddStory;