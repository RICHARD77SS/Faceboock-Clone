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
          
              <p>Criar story</p>
            <Button className='bt-add'>
              <div className="div-ico">
                +
              </div>
            </Button>
          </StorySt>
        </Button>
      </Link>
    </>
  )
}

export default AddStory;