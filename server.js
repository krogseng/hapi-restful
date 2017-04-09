'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');

const server = new Hapi.Server();
server.connection({
    //  host: 'localhost',
    port: 3300
});

server.app.db = mongojs('hapi-rest-mongo', ['books']);

server.register([
    require('./routes/books')
], (err) => {
    if (err) {
        throw err;
    }
    server.start((err) => {
        console.log('Server running at:', server.info.uri);
    });
});
// server.route({
//     method: 'GET',
//     path: '/books',
//     handler: function (request, reply) {
//         return reply('Here the books will be appearing');
//     }
// });

// server.start((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Server is running at:', server.info.uri);
// });