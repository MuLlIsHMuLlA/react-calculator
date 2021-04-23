import React from 'react';

const Button = (props) => {

    const { style, clickHandler, block = false } = props;

    return (
        <button style={style} className={`btn ${block ? 'btn-block' : ''}`} onClick={clickHandler} >
            {props.children}
        </button>
    )

}

export default Button;