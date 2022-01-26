import React from 'react';

export default function Title(props) {
    const styleH1 = {
        fontSize: '1.5rem',
        paddingLeft: '.5rem',
    };

    return (
        <>
            <div id="container">
                <h1 style={styleH1}>{props.children}</h1>
            </div>
        </>
    );
}
