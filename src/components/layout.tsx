import * as React from "react";

import Navbar from "./navbar";
import Content from "./content";

export default function Layout() {
    return (
        <div style={ style }>
            <Navbar/>
            <Content/>
        </div>

    );
}

const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100%"
}