import React from 'react';

const Box = (props) => {

    const boxStyle = {
        display: 'inline-block',
        padding: '10px',
        backgroundColor: props.myBox.Color,
        height: props.myBox.Height,
        width: props.myBox.Width
    }
    return(
        <div style={boxStyle}></div>
    );
}

export default Box;



