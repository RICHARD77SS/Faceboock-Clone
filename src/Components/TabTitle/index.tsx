import React from "react"

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle = (Props: Props) => {

  return (
    <li>
      <button onClick={() => Props.setSelectedTab(Props.index)}><pre>{Props.title}</pre></button>
    </li>
  )
}

export default TabTitle