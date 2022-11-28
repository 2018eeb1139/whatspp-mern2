import React, { useState } from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios'

const Chat = ({ messages }) => {
  // console.log(messages)
  const [input, setInput] = useState("");

  const sendMessages = async (e) => {
    e.preventDefault();
    await axios.post('/messages/new', {
      message: input,
      name: "Aman",
      timestamp: new Date().toUTCString(),
      received: true
    })
    setInput('');
  }

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src='https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?b=1&s=170667a&w=0&k=20&c=oFtP564Ykvak2VIyM1OUb29daY5S4uqsmT3j3_8QgfQ=' />
        <div className='chat__headerInfo'>
          <h3>Friends Forever</h3>
          <p>Aman, Rahul, Vipin, Sulav, Vivek, Harshit, Pradhyumn, Umesh, Roshan, Shivam, Vishal ......</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        {messages.map((message, key) =>
        (
          <p key={message._id} className={`chat__message ${message.received && 'chat__reciever'}`}>
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>{message.timestamp}</span>
          </p>
        )
        )}

        {/* <p className='chat__message chat__reciever'>
            <span className='chat__name'>Shubham</span>
            This is a message
            <span className='chat__timestamp'>{new Date().toUTCString()}</span>
          </p> */}
      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input
            type={'text'}
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={sendMessages}
            type='submit'
          >
            Send message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat