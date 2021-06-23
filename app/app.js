document.querySelector('button').onclick = () => {

    const socket = io('ws://localhost:8080');

    socket.on('connect', (message)=>{
	console.log('Successfully connected to server');
    })

    socket.on('connect_error', (message)=>{
	console.log('Connection error: ', error);
    })

     socket.on('connect_timeout', (timeout)=>{
	console.log('Connection attemot timed out after: ', timeout);
    })

    socket.on('message', text => {

      const el = document.createElement('li');
      el.innerHTML = text;
      document.querySelector('ul').appendChild(el)

    });

    //const text = document.querySelector('input').value;
    socket.emit('message', 'connect me')
    
}

// Regular Websockets

// const socket = new WebSocket('ws://localhost:8080');

// // Listen for messages
// socket.onmessage = ({ data }) => {
//     console.log('Message from server ', data);
// };

// document.querySelector('button').onclick = () => {
//     socket.send('hello');
// }
