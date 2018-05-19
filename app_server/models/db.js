var mongoose = require('mongoose');

var dbURI = 'mongodb://begouser:begoproject123@ds225010.mlab.com:25010/begoproject'; 
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => { 
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', err =>  { 
    console.log('Mongoose connection error:', err);
});
 
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');

});

const gracefulShutdown = (msg, callback) => { 
    mongoose.connection.close( () => {
        console.log('Mongoose disconnected through ${msg}'); 
        callback();
    }); 
}; 

// For nodemon restarts 
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => { 
        process.kill(process.pid, 'SIGUSR2');
    }); 
}); 

// For app termination 
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => { 
        process.exit(0);
    }); 
});
// For Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => { 
        process.exit(0);
    });
});

require('./Project');
require('./account');