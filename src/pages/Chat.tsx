import React from 'react'
import '../assets/css/chatpage.css'

export default function Chat(): JSX.Element {
  return (
    <div className="chat-page">
      {/* Login prompt at top */}
      <div className="login-prompt">
        <div className="login-box">
          <p>Log in to see your latest chats.</p>
        </div>
      </div>

      <div className='chat-bar'>
        {/* AI Avatar and welcome message */}
        <div className="chat-welcome">
          <div className="ai-avatar">
            <div className="avatar-icon">
              <img src='img/logo.png' width="80px"></img>
            </div>
          </div>
          <div className="welcome-message">
            <p>Please log in to start chatting.</p>
            <span className="timestamp">06:45 AM</span>
          </div>
        </div>

        {/* Chat input bar at bottom */}
        <div className="chat-input-bar" >
          <div className="input-icon">
            <div className="icon-lock">🔒</div>
            <div className="icon-attach">📎</div>
          </div>
          <textarea placeholder="Ask a legal question, upload a document, or ask me to create an agreement..." 
          className="chat-input-field" />
          <button className="chat-send-btn">
            <span className="send-icon">✈️</span>
          </button>
        </div>
      </div>
    </div>
  )
}
