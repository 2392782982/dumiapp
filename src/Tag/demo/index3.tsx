import React, { useState } from "react";
import Tag from "../index";

export default function TagDom1() {

    return (
        <div >
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <Tag type="success" text="标签1" effect={true} />
                <Tag type="info" text="标签2" effect={true} />
                <Tag type="warning" text="标签3" effect={true} />
                <Tag type="danger" text="标签4" effect={true} />
                <Tag type="tap" text="标签5" effect={true} />
            </div>
        </div>
    )
}