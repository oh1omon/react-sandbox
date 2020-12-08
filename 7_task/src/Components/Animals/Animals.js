import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimalCard from '../AnimalCard/AnimalCard';
import NewAnimal from '../NewAnimal/NewAnimal';
import './Animals.css';

const API = 'http://localhost:3001/animals';

function Animals() {
    useEffect(() => {
        axios.get(API).then((response) => setAnimals(response.data));
    }, []);

    const [animals, setAnimals] = useState([]);

    const [newAnimal, setNewAnimal] = useState({
        name: '',
        animalClass: '',
        img: '',
        desc: '',
        link: '',
    });

    const valueHandler = (e) => {
        setNewAnimal({
            ...newAnimal,
            [e.target.name]: e.target.value,
        });
    };

    const submit = () => {
        axios.post(API, newAnimal);
    };

    return (
        <div className="animals">
            {animals.map((animal) => (
                <AnimalCard
                    key={animal.id}
                    name={animal.name}
                    animalClass={animal.animalClass}
                    img={animal.img}
                    desc={animal.desc}
                    link={animal.link}
                />
            ))}
            <NewAnimal submit={submit} valueHandler={valueHandler} />
        </div>
    );
}

export default Animals;
