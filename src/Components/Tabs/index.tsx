
import React, { ReactElement, useState } from "react"

import { TabButtons, TabContainer } from "./styles"

import TabTitle from "../TabTitle"
import Button from "../Button"
import { GrNext, GrPrevious } from 'react-icons/gr';

type Props = {
  children: ReactElement[]
}

const Tabs = (Props: Props) => {
  const [selectedTab, setSelectedTab] = useState(0)
  console.log(selectedTab)
  const goLeft = () => {
    let tabButtons = document.getElementById('tab-buttons');
    tabButtons!.scrollLeft += 150;
  }
  const goRight = () => {
    let tabButtons = document.getElementById('tab-buttons');
    tabButtons!.scrollLeft -= 150;
  }
  if (selectedTab === 0) {
    document.querySelector('.Visão')?.classList.add('active')
  } else {
    document.querySelector('.Visão')?.classList.remove('active')
  }
  if (selectedTab === 1) {
    document.querySelector('.Bate-papo')?.classList.add('active')
  } else {
    document.querySelector('.Bate-papo')?.classList.remove('active')
  }
  if (selectedTab === 2) {
    document.querySelector('.Suas')?.classList.add('active')
  } else {
    document.querySelector('.Suas')?.classList.remove('active')
  }
  if (selectedTab === 3) {
    document.querySelector('.Mais')?.classList.add('active')
  } else {
    document.querySelector('.Mais')?.classList.remove('active')
  }
  return (
    <TabContainer>
      <TabButtons id='tab-buttons'>
        <Button className='btn prev' onClick={() => { goRight() }}>
          <GrPrevious size='20' />
        </Button>
        {Props.children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
        <Button className='btn next' onClick={() => { goLeft() }}>
          <GrNext size='20' />
        </Button>
      </TabButtons>
      {Props.children[selectedTab]}
    </TabContainer>
  )
}

export default Tabs