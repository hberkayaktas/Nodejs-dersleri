


const http =require('http');
const routes = require('./013_z_routes')


const server = http.createServer(routes); 


server.listen(3000);

console.log('Listening port on 3000...');