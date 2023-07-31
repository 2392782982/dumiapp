import React from "react";
import Tag from "../index";

export default function TagDom2(){
    return(
       <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Tag  type="success"  text="标签1"  width={120} height={70}/>
      <Tag  type="info"  text="标签1"  width={100} height={60}/>
      <Tag  type="warning"  text="标签1"  width={80} height={50}/>
      <Tag  type="danger"  text="标签1"  width={60} height={40}/>

       </div>
    )
}