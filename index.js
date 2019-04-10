//Load express
var http = require('http');
var fs = require('fs');

const PORT = process.env.PORT || 8081;

//Define requests
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'})
	var url = req.url;
	if(url === '/DockerHookTest'){
		fs.readFile('dockerPublishFile.txt', function(err, data) {
				if(err) {
					throw err;
				}
	                        res.writeHead(200, {'Content-Type': 'text/plain'});
	                        res.write(data);
	                        res.end();
		});
	}
	else if(url === '/GitDeployTest'){                                                           
        fs.readFile('gitDeploy.txt', function(err, data) {                       
        	                if(err) {                                                        
        	                        throw err;                                               
        	                }                                                                
        	                res.writeHead(200, {'Content-Type': 'text/plain'});              
        	                res.write(data);                                                 
        	                res.end();                                                       
        	});                                                                              
	}                                                                                        
	else {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('This is a simple app for testing functionality');
		res.end();
	}

}).listen(PORT, function() {
	console.log("Server start at port " + PORT);
});

