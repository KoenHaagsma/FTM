import React from 'react';

export default function BiggestChangesList({ data }) {
    const styleUl = {
        backgroundColor: '#e3e6e8',
        margin: '0 2rem',
        padding: '1rem 2rem',
        listStyleType: 'none',
    };

    const styleLi = {
        padding: '.25rem 0',
        fontSize: '11px',
    };

    const styleLiTitle = {
        fontWeight: 'bold',
        margin: '0 auto',
        fontSize: '11px',
        color: '#fff',
        backgroundColor: '#343a3c',
        textAlign: 'center',
        width: '70%',
        padding: '3px 0',
    };

    return (
        <>
            <div id="container">
                <h3 style={styleLiTitle}>Locaties van grootste veranderingen</h3>
                <ul style={styleUl}>
                    {data.map((district, index) => (
                        <li key={index} style={styleLi}>
                            {district.key}: {district.districtName}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
