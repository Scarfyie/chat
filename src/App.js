import "./App.css";
import React from "react";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { FaEllipsisV } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

function App() {
  return (
    
    <div className="container">
      <div className="leftSide">
        {/* Header */}
        <div className="header">
          <div className="userimg">
            <img src="icon.png" className="cover"></img>
          </div>
          <ul className="nav_icons">
            <li><IoChatboxEllipsesSharp/></li>
            <li><FaEllipsisV/></li>
          </ul>
        </div>
        {/* Search */}
        <div className="search_chat">
          <div>
              <input type="text" placeholder="Search or start new chat"></input>
              <BsSearch className="BsSearch"/>
          </div>
        </div>
        {/* Chatlist */}
        <div className="chatlist">
          <div className="block active">
            <div className="imgbx">
              <img src="Admin.png" className="cover"></img>
            </div>
            <div className="details">
              <div className="listhead">
                <h4>Sean</h4>
                <p className="time">10:56</p>
              </div>
              <div className="message_p">
                <p>Hello</p>
              </div>
            </div>
          </div>
          <div className="block unread">
            <div className="imgbx">
              <img src="Admin.png" className="cover"></img>
            </div>
            <div className="details">
              <div className="listhead">
                <h4>Carlos</h4>
                <p className="time">12:56</p>
              </div>
              <div className="message_p">
                <p>This should be ellipsis if the message is too long. If certain characters reached</p>
                <b>1</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="rightSide">
        <div className="header">
          <div className="imgText">
            <div className="userimg">
              <img src="icon.png" className="cover"></img>
            </div>
            <h4>Sean<br/><span>Online</span></h4>
          </div>
            <ul className="nav_icons">
              <li><FaEllipsisV/></li>
            </ul>
        </div>

        {/* Chatbox */}
        <div className="chatBox">
          <div className="message my_message">
            <p>Hi<br/><span>12:15</span></p>
          </div>
          <div className="message frnd_message">
            <p>Hello<br/><span>12:15</span></p>
          </div>
        </div>
        {/* Chat Iput */}
        <div className="chatbox_input">
          <input itemType="text" placeholder="Type a message"></input>
        </div>
      </div>
    </div>
    
  );
}

export default App;
