import React, { useState, useEffect } from 'react';
import AlbumItem from './AlbemItem';
import '../styles/main.css';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="album-container">
            {albums.map(album => (
                <AlbumItem key={album.id} album={album} />
            ))}
        </div>
    );
};

export default AlbumList;
