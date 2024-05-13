import React, { useState, useEffect } from 'react';
import AlbumList from './components/AlbumList';
import AddAlbumForm from './components/AddAlbumForm';
import Navbar from './components/Navbar';
import './styles/main.css';

const App = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.log(error));
    }, []);

    const handleAddAlbum = (newAlbum) => {
        fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAlbum),
        })
        .then(response => response.json())
        .then(data => {
            setAlbums([...albums, data]);
        })
        .catch(error => console.log(error));
    };

    const handleDeleteAlbum = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            const updatedAlbums = albums.filter(album => album.id !== id);
            setAlbums(updatedAlbums);
        })
        .catch(error => console.log(error));
    };

    return (
        <div className="container">
            <Navbar />
            <h1>My Albums</h1>
            <AddAlbumForm onAddAlbum={handleAddAlbum} />
            <AlbumList albums={albums} onDeleteAlbum={handleDeleteAlbum} />
        </div>
    );
};

export default App;
