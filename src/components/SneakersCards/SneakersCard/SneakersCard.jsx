import React from 'react';

const SneakersCard = ({title, category, imageUrl}) => {
    return (
        <a href="#" className="card">
            <div className="card-background" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="card-content">
                <p>{category}</p>
                <h3>{title}</h3>
            </div>
        </a>
    );
};

export default SneakersCard;