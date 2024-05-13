import React, { useState } from 'react';

const AddAlbumForm = ({ onAddAlbum }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAlbum = {
            title: title
        };
        onAddAlbum(newAlbum);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter album title"
            />
            <button type="submit">Add Album</button>
        </form>
    );
};

export default AddAlbumForm;
