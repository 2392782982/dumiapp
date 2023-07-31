import React from "react";
import Tag from "../index";

export default function TagDom1(){
    return(
       <div style={{ display: "flex", justifyContent: "space-around" , alignItems: 'center'}}>
        <Tag  type="success"  text="标签1"/>
        <Tag  type="info" text="标签2"/>
        <Tag  type="warning" text="标签3"/>
        <Tag  type="danger" text="标签4"/>
        <Tag  type="tap" text="标签5"/>
       </div>
    )
}