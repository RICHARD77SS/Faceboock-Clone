
import React from "react"
import Tabs from "../Tabs"
import Tab from "../Tab"
import Overview from "../Overview"
import LiveChat from '../LiveChat';
import YourAnswers from "../YourAnswers";
import MoreLikeThis from "../MoreLikeThis";



function TabLive() {
  return (
    <Tabs>
      <Tab title="Visão geral"><Overview /></Tab>
      <Tab id='btn-1' title="Bate-papo ao vivo"><LiveChat /></Tab>
      <Tab title="Suas respostas"><YourAnswers /></Tab>
      <Tab  title="Mais como esse"><MoreLikeThis /></Tab>
    </Tabs>
  )
}

export default TabLive;