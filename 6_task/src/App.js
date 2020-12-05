import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import View from './View/View';
import Popup from './Popup/Popup';
import NotesList from './NotesList/NotesList';
import './App.css';
import axios from 'axios';

const App = () => {
    const [note, setNote] = useState({
        firstname: '',
        lastname: '',
        phonenumber: '',
        message: '',
        role: '',
        showPopup: false,
    });

    const [showPopup, setShowPopup] = useState(false);

    const valueHandler = (event) => {
        setNote({
            ...note,
            [event.target.name]: event.target.value,
        });
    };

    const submitHandler = () => {
        axios.post('http://localhost:3001/notes', note);
        window.location.reload();
    };

    const popupHandler = (event) => {
        event.preventDefault();
        setShowPopup(true);
    };

    return (
        <div>
            <div className="app">
                <Form valueHandler={valueHandler} submit={popupHandler} />
                <View
                    firstname={note.firstname}
                    lastname={note.lastname}
                    phonenumber={note.phonenumber}
                    role={note.role}
                    message={note.message}
                />
                <NotesList />
                {showPopup && (
                    <Popup
                        firstname={note.firstname}
                        lastname={note.lastname}
                        phonenumber={note.phonenumber}
                        role={note.role}
                        message={note.message}
                        submit={submitHandler}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
