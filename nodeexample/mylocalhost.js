//calling the module of http
var http = require('http');

//define port to listen to
const PORT=8080;

var num = 0;

//function for handling request and response
function handleRequest(request, response){
  num ++;
  console.log(num);
  response.end("The request has happened! Path hit: " + request.url);
}

//create the server
var server = http.createServer(handleRequest);

//start the server
server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
