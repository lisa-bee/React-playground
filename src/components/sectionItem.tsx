import * as React from "react";

interface Props {
    image: string,
    text: string
}

export default function SectionItem(props: Props) {
    return (
        <div style={ style(props.image) }>  
            <h1>{ props.text }</h1> 
        </div>
    )
}

const style = function(image: string): React.CSSProperties  {
    return {
        display: "flex",
        flexGrow: 1,
        margin: "0.5rem",
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        alignItems: "center",
        justifyContent: "center"
    }
 
}