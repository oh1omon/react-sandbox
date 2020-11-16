import React from 'react';
import './Popup.css';

const closeHandler = () => {
    window.location.reload();
};

const Popup = (props) => {
    return (
        <div className="overlay">
            <div className="noShow popup">
                <h2>This is your input</h2>
                <p>
                    Your first name is <span className="fw800">{props.firstname}</span>
                </p>
                <p>
                    Your last name is <span className="fw800">{props.lastname}</span>
                </p>
                <p>
                    Your phonenumber is <span className="fw800">{props.phonenumber}</span>
                </p>
                <p>
                    Your role is <span className="fw800">{props.role}</span>
                </p>
                <p>
                    Your message is <span className="fw800">{props.message}</span>
                </p>
                <button onClick={closeHandler}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
