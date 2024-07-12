import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewArticle() {
    const [articleData, setArticleData] = useState({
        title: "",
        author: "",
        lead: "",
        imageUrl: ""
    });

    const handleCreateArticle = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(articleData),
            });

            if (response.ok) {
                console.log('Artículo creado con éxito.');
            } else {
                console.error('Error al crear el artículo:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error al crear el artículo:', error.message);
        }
    };

    return (
        <div>
            <label>Título:</label>
            <input type="text" value={articleData.title} onChange={(e) => setArticleData({ ...articleData, title: e.target.value })} />

            <label>Autor:</label>
            <input type="text" value={articleData.author} onChange={(e) => setArticleData({ ...articleData, author: e.target.value })} />

            <label>Lider:</label>
            <input type="text" value={articleData.lead} onChange={(e) => setArticleData({ ...articleData, lead: e.target.value })} />

            <label>URL de la imagen:</label>
            <input type="text" value={articleData.imageUrl} onChange={(e) => setArticleData({ ...articleData, imageUrl: e.target.value })} />

            <button onClick={handleCreateArticle}>Crear Artículo</button>
        </div>
    );
}

export default NewArticle;