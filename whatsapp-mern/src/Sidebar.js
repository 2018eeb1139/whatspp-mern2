import React from 'react'
import './Sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src='https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png' />
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined />
                    <input placeholder='Search or start new chat' type='text' />
                </div>
            </div>
            <div className='sidebar__chats'>
                <SidebarChat
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrKejFdmXuAr4iwfMD_Tk_5xRzkhzk7Johw&usqp=CAU"
                    roomName="Wallpaper Cave"
                    lastMessage="Cool stuff man"
                />
                <SidebarChat image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzJt4MOK-AJy2dFLVVj3RCI5xFTpk9mbGdA&usqp=CAU"
                    roomName="Sophistication"
                    lastMessage="You are so lucky!"
                />
                <SidebarChat image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRT42OvNFX8guLifLYXyMhF6144I-Kzss6w&usqp=CAU"
                    roomName="Red Blue"
                    lastMessage="Red things are quite good some time"
                />
                <SidebarChat image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2gpnqWbeS7cUbRNDbDGtBEr7n0bQK3mMOw&usqp=CAU"
                    roomName="Galaxy Gargantua"
                    lastMessage="We are in the same galaxy"
                />
                <SidebarChat image="https://img.freepik.com/free-photo/cosmic-background-with-colorful-lights-with-cool-shapes_181624-26195.jpg?w=2000"
                    roomName="Colourful lights in Dreams"
                    lastMessage="My dream is to achieve my all goals"
                />
            </div>
        </div>
    )
}

export default Sidebar