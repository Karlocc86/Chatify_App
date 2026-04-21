import { useEffect } from 'react'
import './App.css'
import { socket } from './socket'
import ManageConnection from './components/ManageConnection'
import MyForm from './components/MyForm'
import Channels from './components/Channels'
import Users from './components/Users'
import Chats from './components/Chats'

function App() {
  useEffect(() => {
    const onConnect = () => {
      console.log("Conectado")
    }
    const onDisconnect = () => {
      console.log("Desconectado")
    }
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket.off('chat message')
    }

  }, [])
 
  return (
    <>

      <h1>Chatify</h1>
      <ManageConnection/>

      <div className='container'>

        <div className='segment'>
          <Channels/>
        </div>


         <div className="segment-chat">
          <div style={{ flex: 1, overflow: 'auto' }}>
            <Chats/>
          </div>

             <MyForm className="form"/>

        </div>

        <div className='segment'>
          <Users/>
        </div>

      </div>
      
      
    </>
    
  )
}

export default App