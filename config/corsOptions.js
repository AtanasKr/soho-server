const allowedOrigins = require('./allowedOrigins');

const corsOtions = {
    origin: (origin, callback) => {
        if(allowedOrigins.indexOf(origin)!==-1||!origin){
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS or not included in the origin!'))
        }
    },
    optionSuccessStatus: 200
}

module.exports = corsOtions;

