import React from 'react';
import './Form.css';

const Form = ({ submit, valueHandler }) => {
    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="firstname">First Name</label>
                <br />
                <input onChange={valueHandler} name="firstname" type="text" />

                <br />

                <label htmlFor="lastname">Last name</label>
                <br />
                <input onChange={valueHandler} name="lastname" type="text" />

                <br />

                <label htmlFor="phonenumber">Phonenumber</label>
                <br />
                <input onChange={valueHandler} name="phonenumber" type="text" />

                <br />

                <label htmlFor="role">Your role</label>
                <br />
                <select onChange={valueHandler} name="role">
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>

                <br />

                <label htmlFor="message">Your message</label>
                <br />
                <textarea onChange={valueHandler} name="message" cols="30" rows="10"></textarea>

                <br />

                <input type="submit" value="send" />
            </form>
        </div>
    );
};

export default Form;
