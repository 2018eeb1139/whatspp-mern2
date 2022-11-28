import React from 'react'
import './SidebarChat.css'
import Avatar from '@mui/material/Avatar';

const SidebarChat = (props) => {
  // console.log(props.image)
  const {image, roomName, lastMessage}=props
  return (
    <div className='sidebarChat'>
        <Avatar src={image}/>
        <div className='sidebarChat__Info'>
            <h2>{roomName}</h2>
            <p>{lastMessage}</p>
        </div>

    </div>
  )
}

export default SidebarChat