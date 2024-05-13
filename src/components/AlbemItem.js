import React from 'react';

const AlbumItem = ({ album }) => {
    return (
        <div className="album">
            <h2 className="album-title">{album.title}</h2>
            <div className="album-details">
                <p><strong>ID:</strong> {album.id}</p>
                {/* Render other album details here */}
            </div>
            <div className="album-actions">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default AlbumItem;
