const { Articulo } = require('../models');

const articuloController = {
    getArticulos: async (req, res) => {
        try {
            const articulos = await Articulo.findAll();
            res.json(articulos);
        }catch (err) {
            res.status(500).json({ error: 'Error al obtener los artículos' });
        }
    },

  // Implementa las demás funciones para crear, actualizar y eliminar artículos
};

module.exports = articuloController;
