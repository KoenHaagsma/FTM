import React from 'react';

export default function Legenda() {
    const styleSquare1 = {
        width: '20px',
        height: '20px',
        'background-color': '#FCB860',
        'margin-right': '.5rem',
    };

    const styleSquare3 = {
        width: '20px',
        height: '20px',
        'background-color': '#0E5DA0',
        'margin-right': '.5rem',
    };

    const styleLi = {
        display: 'flex',
        alignItems: 'center',
        'margin-top': '.5rem',
        'font-size': '11px',
    };

    const styleUl = {
        padding: '0',
        marginLeft: '2rem',
    };

    return (
        <>
            <div id="container">
                <ul style={styleUl}>
                    <li style={styleLi}>
                        <div style={styleSquare1}></div>Grootste verandering van afstand
                    </li>
                    <li style={styleLi}>
                        <div style={styleSquare3}></div>Gemiddelde verandering van afstand in Nederland
                    </li>
                </ul>
            </div>
        </>
    );
}
