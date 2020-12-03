import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:3001/posts';

const Blog = () => {
    const [title, setTitle] = useState('Hello world!');
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({
        title: '',
        desc: '',
        img: '',
        author: '',
    });

    useEffect(() => {
        axios.get(API).then((response) => setPosts(response.data));
    }, []);

    const changeTitleHandler = () => {
        let newTitle = prompt('What should be the next title?');
        setTitle(newTitle);
    };

    return (
        <div>
            <h1 onClick={changeTitleHandler}>{title}</h1>
            <div className="posts">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <img src={post.img} alt="img" />
                        <h2>{post.title}</h2>
                        <p>{post.desc}</p>
                        <p>{post.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
