import React from 'react';
import './NewAnimal.css';

function NewAnimal({ submit, valueHandler }) {
    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="name">Name</label>
                <br />
                <input onChange={valueHandler} name="name" type="text" />

                <br />

                <label htmlFor="animalClass">Class</label>
                <br />
                <select onChange={valueHandler} name="animalClass">
                    <option value="mammals">Mammals</option>
                    <option value="birds">Birds</option>
                    <option value="fish">Fish</option>
                    <option value="reptiles">Reptiles</option>
                    <option value="amphibians">Amphibians</option>
                </select>

                <br />

                <label htmlFor="img">Image link</label>
                <br />
                <input onChange={valueHandler} name="img" type="text" />

                <br />

                <label htmlFor="desc">Description</label>
                <br />
                <textarea onChange={valueHandler} name="desc" type="text" cols="30" rows="10" />

                <br />

                <label htmlFor="link">Link to learn more</label>
                <br />
                <input onChange={valueHandler} name="link" />

                <br />

                <input type="submit" value="send" />
            </form>
        </div>
    );
}

export default NewAnimal;
