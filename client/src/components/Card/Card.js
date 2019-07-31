import React from 'react';

export const Card = ({ children }) => {
    const style = {
        marginTop: '30px'
    }
    return (
        <div style={style} className="card">
            {children}
        </div>

    );
};
