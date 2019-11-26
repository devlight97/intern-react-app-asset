import io from 'socket.io-client';

export const socketNotification = io('http://localhost:8080/notification');
