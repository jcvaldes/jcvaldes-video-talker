import socketClient from "socket.io-client";

const SERVER = 'http://localhost:5000';

let socket;

export const initSocket = () => {
    socket = socketClient(SERVER);
    socket.on('connect', () => {
        console.log('succesfully connected with wss server');
        socket.emit(socket.id);
    });
};
