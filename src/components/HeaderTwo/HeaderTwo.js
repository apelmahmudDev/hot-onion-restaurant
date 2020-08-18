import React from 'react';
import './HeaderTwo.css';

const HeaderTwo = () => {
    return (
        <div className="my-5">
            <nav className="second-nav">
                <a href="/breakfast">Breakfast</a>
                <a href="/lunch">Lunch</a>
                <a href="/dinner">Dinner</a>
            </nav>
        </div>
    );
};

export default HeaderTwo;