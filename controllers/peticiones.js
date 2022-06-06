const db = require('../models/db');

exports.getAllEquipos = (req, res) => {
    db.getInstance().collection("equipos").find({}).toArray((err, data) => {
        if (err) throw err;
        console.log(data);
        res.send(data);
    });
};

exports.getUnEquipo = (req, res) => {
    let nombre = req.params.nombre;

    db.getInstance().collection("equipos").find({ "nombre": nombre }).toArray((err, data) => {
        if (err) throw err;
        console.log(data);
        res.send(data[0]);
    });
};


exports.getAllJugadores = (req, res) => {
    db.getInstance().collection("jugadores").find({}).toArray((err, data) => {
        if (err) throw err;
        console.log(data);
        res.send(data);
    });
};

exports.getAllJugadoresUnEquipo = (req, res) => {
    let club = req.params.club;
    db.getInstance().collection("jugadores").find({ "club": club }).toArray((err, data) => {
        if (err) throw err;
        console.log(data);
        res.send(data);
    });
};

exports.getUnJugador = (req, res) => {
    //http://localhost:8080/jugador/?nombre=Agustin&apellido=Rossi
    let nombre = req.query.nombre;
    let apellido = req.query.apellido;
    db.getInstance().collection("jugadores").find({
        $and: [
            { "nombre": nombre },
            { "apellido": apellido }
        ]
    }).toArray((err, data) => {
        if (err) throw err;
        console.log(data);
        res.send(data[0]);
    });
};