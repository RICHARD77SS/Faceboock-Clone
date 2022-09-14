
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

  const goLeft = () => {
    let tabButtons = document.getElementById('tab-buttons');
    tabButtons!.scrollLeft += 100;
  }
  const goRight = () => {
    let tabButtons = document.getElementById('tab-buttons');
    tabButtons!.scrollLeft -= 100;
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