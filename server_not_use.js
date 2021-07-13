const http = require('http');

const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((req, res) => 
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    let obj = [
            {
                x:'a', 
                y:10
            }, 
            {
                x:'b', 
                y:12
            }, 
            {
                x:'c', 
                y:15
            }, 
            {
                x:'d', y:8
            }];
    res.end( obj );
});

server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});