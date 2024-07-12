const express = require('express');
const router = express.Router();
const Article = require('../models/article');
console.log('Objeto Article:', Article);


router.post('/articles', async (req, res) => {
  try {
    const article = new Article(req.body);
    const savedArticle = await article.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    console.error('Error al guardar el artículo en la base de datos:', error);
    res.status(500).send('Error interno del servidor');
  }
});


router.delete('/articles/:articleId', async (req, res) => {
    const articleId = req.params.articleId;
  
    try {

      const deletedArticle = await Article.findByIdAndDelete(articleId);
  
      if (deletedArticle) {
  
        res.status(200).json(deletedArticle);
      } else {
     
        res.status(404).json({ error: 'Artículo no encontrado' });
      }
    } catch (error) {

      console.error('Error al eliminar el artículo:', error);
      res.status(500).send('Error interno del servidor');
    }
  });

module.exports = router;