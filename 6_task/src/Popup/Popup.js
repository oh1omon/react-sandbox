import React from 'react';
import './Popup.css';

const closeHandler = () => {
    window.location.reload();
};

const Popup = ({ firstname, lastname, phonenumber, role, message, submit }) => {
    return (
        <div className="overlay">
            <div className="noShow popup">
                <h2>This is your input</h2>
                <p>
                    Your first name is <span className="fw800">{firstname}</span>
                </p>
                <p>
                    Your last name is <span className="fw800">{lastname}</span>
                </p>
                <p>
                    Your phonenumber is <span className="fw800">{phonenumber}</span>
                </p>
                <p>
                    Your role is <span className="fw800">{role}</span>
                </p>
                <p>
                    Your message is <span className="fw800">{message}</span>
                </p>
                <button onClick={closeHandler}>Close</button>
                <button onClick={submit}> yes</button>
            </div>
        </div>
    );
};

export default Popup;
