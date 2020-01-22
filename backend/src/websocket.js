const socketio = require('socket.io');

const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

const conections = []

exports.setupWebsocket = (server) => {
    const io = socketio(server);

    io.on('connection', socket => {
        console.log(socket.id);
        const { latidude, longitude, techs } = socket.handshake.query;

        conections.push({
            id: socket.id,
            coordinates: {
                latidude: Number(latidude),
                longitude: Number(longitude)
            },

            techs: parseStringAsArray(techs)
        })
    });
};

exports.findConnections = (coordinates, techs) => {
    return conections.filter(connection => {
        return calculateDistance(coordinates, connection.coordinates) < 10
         && connection.techs.some(item => techs.includes(item))
    })
}