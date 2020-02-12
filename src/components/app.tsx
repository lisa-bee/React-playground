import * as React from "react";

import Layout from "./layout"; 



interface Props {
    compiler: string;
    framework: string;
};

export default function App(props: Props) {
    return (
        <h1 style={style}>
        Hello from {props.compiler} and {props.framework}!!!
        </h1>
        
    );
}


const centeredContent: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
}

const theme: React.CSSProperties = {
    color: 'green'
}

const style = {...centeredContent, ...theme}