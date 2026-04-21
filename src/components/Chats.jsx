import React, { useEffect, useState } from 'react'
import { socket } from '../socket'

const Chats = () => {


  const [messages, setMessage] = useState([]);

  useEffect(() => {
    
    socket.on('chat message', (msg, serverOffset) => {
      console.log("Mensaje desde Server : ",msg);
      socket.auth.serverOffset = serverOffset;
      setMessage((prev) => [...prev, msg])

    })


  }, [])

  return (

    <> 

    <div><h2 className='title'>Chats</h2></div>
    {messages.map((m) => (
      <p className='message'>{m}</p>
    ))}
    </>
  )
}

export default Chats  

