import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages,setMessages]=useState([]);
  useEffect(()=>{
    axios.get('/messages/sync')
    .then((res)=>{
      setMessages(res.data)
      // console.log(res.data);
    })
  },[])
  useEffect(() => {
    const pusher = new Pusher('5650fb121d7949bcdc46', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      // alert(JSON.stringify(data));
      setMessages([...messages, data])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  
  // console.log(messages);
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
