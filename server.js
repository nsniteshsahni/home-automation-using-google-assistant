
var http = require('http');
var PythonShell = require('python-shell');
const PORT=80; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
    console.log("Yeah,We got it!");
    PythonShell.run('core.py', function (err) {
    if (err) throw err;
    console.log('finished');
    });
    
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
