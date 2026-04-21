import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3000';

export const socket = io(URL, {
  auth: {
    serverOffset: 0 , 
    asktimeout: 10000,
    retries: 3,
  }
});