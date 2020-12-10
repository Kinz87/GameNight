import React from 'react'
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';

function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="Genesis"
        image="DungeonsDragons.jpg"
        describe="Continuation from the first campaign"
    />
      <POPOSSpace 
        name="Magic of the Sea"
        image="Pirates.jpg"
        describe="A Pirate's life for thee!"
      />
      <POPOSSpace 
        name="DanMachi"
        image="Danmachi.jpg"
        describe="Based on the anime of is it wrong to pick up girls in a dungeon?"
      />
      
      
    </div>
  )
}

export default POPOSList