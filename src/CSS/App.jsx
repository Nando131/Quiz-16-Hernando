
import logo from './assets/logo.jpg'
import jempol from './assets/jempol.jpg'
import chat from './assets/chat.jpg'
import share from './assets/share.jpg'
import K from './assets/K.jpg'
import notif2 from './assets/notif2.jpg'
import house from './assets/house.jpg'
import profile from './assets/profile.jpg'
import T from './assets/T.jpg'
import verified from './assets/verified.jpg'

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
      <FollowSuggestions />
    </div>
  );
};




const Sidebar = () => (
  
  <div className="sidebar">
    <nav>
      <ul className='allsidebar'>
        <div>
          <p className='SOCIO' >SOCIO.</p>
        </div>
        <div className='Navhouse'>
          <img className='house' src={house}></img>
          <li className='Home' >Home</li>
        </div>


        <div className='Navnotif'>
          <img className='notif' src={notif2}></img>
          <li>Notification</li>
        </div>


        <div className='NavMessages'>
          <img className='messages' src={chat}></img>
          <li>Messages</li>
        </div>

        <div className='NavProfile'>
          <img className='profile' src={profile}></img>
          <li>Profile</li>
        </div>
      </ul>
    </nav>
    <button className="trending-button">Trending</button>
  </div>
);

const MainContent = () => (
  <div className="main-content">
    <div className="post-section">
      <img className='K' src={K}></img>
      <input type="text" placeholder="What happened today?" />
      <button className="share-button">Share</button>
    </div>
    <div className="feed">
      <Post username="tereke7319" time="40 days ago" content="Makan apa nich" />
      <Post username="tereke7319" time="40 days ago" content="Selamat malam" />
    </div>
  </div>
);

const Post = ({ username, time, content }) => (
  <div className="post">
    <strong>{username}</strong> {time}
    <p>{content}</p>
    <div className="engagement">

      <div className='zero'>
        <img className='jempol' src={jempol}></img>
        <span>0</span>
      </div>

      <div className='ten'>
        <img className='chat' src={chat}></img>
        <span>10</span>
      </div>

      <div className='secondten'>
        <img className='share' src={share}></img>
        <span>10</span>
      </div>
    </div>
  </div>
);

const FollowSuggestions = () => (
  <div className="follow-suggestions">
    <h3>Who to follow</h3>

    <ul className='gambarone'>
      <img className='gambart' src={T}></img>
      <li className='tereke' > tereke7319  +</li>
    </ul>


    <ul className='gambarK'>
      <img className='gambarKK' src={logo}></img>
      <li className='rageyo'  >rageyoc579   +</li>
    </ul>

    <div className='navsee'>
      <p  className='seemore' >See More</p>
    </div>
  </div>
);

export default App;
