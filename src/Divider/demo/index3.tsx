import React from "react";
import Divider from '../index'

export default function DividerDom3(){
    return (
      <div  style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Divider text='青春是一个短暂的美梦' contentPosition={true}/>
      <Divider text='当你醒来时'          contentPosition={true}/>
      <Divider text='它早已消失无踪'      contentPosition={true} />
      <Divider text='害得人声名狼藉'      contentPosition={true} />

      </div>
    );
  };




