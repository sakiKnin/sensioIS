const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    
    console.log(`User ${socket.id.substr(0,2)} is connected...`);    

    socket.on('message', (message) => {
	
        console.log(message);
	//io.to(`${socket.id}`).emit('message', 'You are connected');
	
	setTimeout(
	    function(){
		console.log("Dummy work");
		io.to(`${socket.id}`).emit('message', `${socket.id.substr(0,2)} your dummy work is over, you are fired`);
	    }, 5000);
	
    });

    socket.on("disconnect", () => {
	
	console.log(`${socket.id.substr(0,2)} diconnected`);
	
    })
    
});



http.listen(8080, () => console.log('listening on http://localhost:8080') );


// Regular Websockets

// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => { 

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });
