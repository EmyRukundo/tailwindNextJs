import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
     
     <div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/chat.png" alt="ChitChat Logo"></img>
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">LoloLolo Chat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>


  )
  
}
