import React from 'react';
import './AnimalCard.css';

const AnimalCard = ({ name, animalClass, desc, img, link }) => {
    return (
        <div className="animalCard">
            <img src={img} alt={`${name} image`} />
            <h2>{name}</h2>
            <p className="italic">{animalClass}</p>
            <p>{`${desc.split(' ', 15).join(' ')}...`}</p>
            <a href={link}>Read More...</a>
        </div>
    );
};

export default AnimalCard;
