import React from 'react';
import './View.css';

const View = (props) => {
    return (
        <div className="view">
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
        </div>
    );
};

export default View;
