const express = require('express')
const router = express.Router()
const peticiones = require('../controllers/peticiones');


router.get('/', (req, res) => {
    res.send('Api UP')
})

router.get('/equipo', peticiones.getAllEquipos);
router.get('/equipo/:nombre', peticiones.getUnEquipo);

router.get('/jugadores', peticiones.getAllJugadores);
router.get('/jugadores/:club', peticiones.getAllJugadoresUnEquipo);
router.get('/jugador/', peticiones.getUnJugador);

module.exports = router;