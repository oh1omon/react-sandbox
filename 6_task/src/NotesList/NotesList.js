import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotesList = () => {
    useEffect(() => axios.get('http://localhost:3001/notes').then((res) => setPosts(res.data)), []);
    const [posts, setPosts] = useState([]);
    return (
        <div>
            <ul>
                {posts.map((p) => (
                    <li key={p.id}>
                        {' '}
                        {p.firstname} {p.lastname} {p.phonenumber} {p.message} {p.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesList;
