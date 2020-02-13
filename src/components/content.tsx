import * as React from "react";

import SectionItem from "./sectionItem";

export default function Content() {
    return (
        <div style = { style }>
            <SectionItem text="SKY" image="../images/sky.jpg"/>
           <SectionItem text="EARTH" image="../images/berg.jpg"/>
           <SectionItem text="SEA" image="../images/sea.jpg"/>
        </div>
    );
}

const style: React.CSSProperties = {
display: "flex",
flexDirection: "column",
flexGrow: 1
}