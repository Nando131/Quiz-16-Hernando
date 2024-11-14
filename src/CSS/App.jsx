import React from 'react'
import notifimage from './assets/notification.png'
import rumahimage from './assets/home.png/'
import msgimage from './assets/message.png/'
import profileimage from './assets/user.png/'
import './css/sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='navbar'>
        <div className='notif-nav'>
          <a>
            <img className='rumahimg imgsize' src={rumahimage}></img>
            <p className='gill-sans bold'>Rumah</p>
          </a>
          <a>
            <img className='notifimg imgsize' src={notifimage}></img>
            <p className='gill-sans bold'>Notification</p>
          </a>
          <a>
            <img className='messageimg imgsize' src={msgimage}></img>
            <p className='gill-sans bold'>Message</p>
          </a>
          <a>
            <img className='userimg imgsize' src={profileimage}></img>
            <p className='gill-sans bold'>Profile</p>
          </a>
          <button className='button-trend'>Trending</button>
        </div>
      </div>
    </div>
  )
}