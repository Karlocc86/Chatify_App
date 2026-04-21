import React from 'react'
import { useState } from 'react'
import { socket } from '../socket'


const MyForm = ({className}) => {
    const [message, setMessage] = useState('')
    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        socket.emit('chat message', message);
    };

  return (
    <div className={className}>
        <input
         type="text"
         name="message"
         value={message}
         onChange={handleChange}
        />
    <button onClick={handleClick}>Enviar</button>
    </div>
  )
}

export default MyForm