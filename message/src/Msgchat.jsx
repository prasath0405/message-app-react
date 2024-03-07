import React, { useState } from 'react'
import './Styles.css'
import Prasath from './image/download.jpg'
import Prasath1 from './image/pexels-photo-1382731.jpeg'
import Prasath2 from './image/pexels-photo-14526673.jpeg'
import Prasath3 from './image/pexels-photo-2379005.jpeg'
import Prasath4 from './image/pexels-photo-2474307.jpeg'
import Prasath5 from './image/pexels-photo-2919367.jpeg'
import Prasath6 from './image/pexels-photo-3564412.jpeg'
import Prasath7 from './image/photo.jpg'
import { AiTwotoneDelete } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { GoPaperclip } from "react-icons/go";
import { FaBellSlash } from "react-icons/fa6";
import { FaUserGroup,FaMessage,FaEllipsisVertical } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";


export const Msgchat = () => {

    const [message,setMessage] = useState("null");
    const [array,setArray] =useState([]);
    console.log(array);
    function gettingdatafrominput(ss){
        setMessage(ss.target.value);
    }
   
    function storingdata(){
        setArray([...array, {id:array.length,newmessage:message}])
    }
    function deletefunction(ssssss){
        console.log(ssssss);
      let removeddata =  array.filter((dd)=>dd.id !== ssssss.id)
      setArray(removeddata)
    }
  return (

 <div>
   <div class="background-green"></div>


    <div class="main-container">
   <div class="left-container">

{/* <!--header --> */}
    <div class="header">
      <div class="user-img">
        <img class="dp" src= {Prasath} alt=""/>
      </div>
      <div class="nav-icons">
        <li><i class="fa-solid fa-users"></i><FaUserGroup /></li>
        <li><i class="fa-solid fa-message">
         </i><FaMessage /></li>
        <li><i class="fa-solid fa-ellipsis-vertical"></i><FaEllipsisVertical /></li>
      </div>
    </div>


{/* <!--notification --> */}
    <div class="notif-box">
      <i class="fa-solid fa-bell-slash"><FaBellSlash /></i>
      <div class="notif-text">
           <p>Get Notified of New Messages</p>
           <a href="/">Turn on Desktop Notifications</a>
          </div>
      <i class="fa-solid fa-xmark"></i><HiXMark />
    </div>

{/* <!--search-container --> */}
    <div class="search-container">
      <div class="input">
<i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-sharp fa-solid fa-bars-filter"><CiSearch /></i>
        <input type="text" placeholder="Search or start new chat"/></div>
   
    </div>

{/* --chats -- */}
    <div class="chat-list">
      <div class="chat-box">
        <div class="img-box">
          <img class="img-cover" src= {Prasath1} alt=""/>
        </div>
        <div class="chat-details">
          <div class="text-head">
            <h4>kamali</h4>
            <p class="time unread">11:49</p>
          </div>
          <div class="text-message">
            <p>“How are you?”</p>
            <b>1</b>
          </div>
        </div>
      </div>
      <div class="chat-box">
        <div class="img-box">
          <img class="img-cover" src= {Prasath2} alt=""/>
        </div>
        <div class="chat-details">
          <div class="text-head">
            <h4>Risi</h4>
            <p class="time unread">10:49</p>
          </div>
          <div class="text-message">
            <p>“I’ll be there.”</p>
            <b>4</b>
          </div>
        </div>
      </div>
      <div class="chat-box">
        <div class="img-box">
          <img class="img-cover" src={Prasath3} alt=""/>
        </div>
        <div class="chat-details">
          <div class="text-head">
            <h4>Prasath</h4>
            <p class="time unread">09:49</p>
          </div>
          <div class="text-message">
            <p>“Make somebody’s day.”</p>
            <b>2</b>
          </div>
        </div>
      </div>
      <div class="chat-box">
        <div class="img-box">
          <img class="img-cover" src= {Prasath4} alt=""/>
        </div>
        <div class="chat-details">
          <div class="text-head">
            <h4>Riyas</h4>
            <p class="time">08:49</p>
          </div>
          <div class="text-message">
            <p>“Dreams come true.”</p>
          </div>
        </div>
      </div>
      <div class="chat-box active">
        <div class="img-box">
          <img class="img-cover" src={Prasath5} alt=""/>
        </div>
        <div class="chat-details">
          <div class="text-head">
            <h4>Sam</h4>
            <p class="time">07:49</p>
          </div>
          <div class="text-message">
            <p>Awesome! I'll start a vid..</p>
          </div>
        </div>
      </div>
      <div class="chat-box">
        <div class="img-box">
          <img class="img-cover" src= {Prasath6} alt=""/>
        </div>
        <div class="chat-details">
          <div class="text-head">
            <h4>Abi</h4>
            <p class="time">06:49</p>
          </div>
          <div class="text-message">
            <p>“Love, light, laughter.”</p>
          </div>
        </div>
      </div>
      <div class="chat-box">
        <div class="img-box">
          <img class="img-cover" src={Prasath6} alt=""/>
        </div>
        <div class="chat-details">
          <div class="text-head">
            <h4>Jenifer</h4>
            <p class="time unread">Yesterday</p>
          </div>
          <div class="text-message">
            <p>“Appreciate the mome..”</p>
            <b>2</b>
          </div>
        </div>
      </div>
      <div class="chat-box">
        <div class="img-box">
          <img class="img-cover" src= {Prasath7} alt=""/>
        </div>
        <div class="chat-details">
          <div class="text-head">
            <h4>Suba</h4>
            <p class="time">Yesterday</p>
          </div>
          <div class="text-message">
            <p>“Now or never.”</p>
          </div>
        </div>
      </div>
    </div>

  </div>





  <div class="right-container">
{/* <!--header --> */}
    <div class="header">
      <div class="img-text">
        <div class="user-img">
        <img class="dp" src= {Prasath1} alt=""/>
      </div>
        <h4>Kamali<br/><span>Online</span></h4>
      </div>
      <div class="nav-icons">
        <li><i class="fa-solid fa-magnifying-glass"></i><CiSearch /></li>
        <li><i class="fa-solid fa-ellipsis-vertical"></i><FaEllipsisVertical /></li>
      </div>
    </div>
{/* 
<!--chat-container -->
*/}      <div class="chat-container">
      <div class="message-box my-message">
        <p>I've been waiting to see that show asap!<br/><span>07:43</span></p>
      </div>
      <div class="message-box friend-message">
        <p>Ahh, I can't believe you do too!<br/><span>07:45</span></p>
      </div>
      <div class="message-box friend-message">
        <p>The trailer looks good<br/><span>07:45</span></p>
      </div>
      <div class="message-box friend-message">
        <p>I've been waiting to watch it!!<br/><span>07:45</span></p>
      </div>
      <div class="message-box my-message">
        <p>😐😐😐<br/><span>07:46</span></p>
      </div>
      <div class="message-box my-message">
        <p>Mee too! 😊<br/><span>07:46</span></p>
      </div>
    <div class="message-box friend-message">
        <p>We should video chat to discuss, if you're up for it!<br/><span>07:48</span></p>
      </div>
      <div class="message-box my-message">
        <p>Sure<br/><span>07:48</span></p>
      </div>
      <div class="message-box my-message">
        <p>I'm free now!<br/><span>07:48</span></p>
      </div>
    <div class="message-box friend-message">
        <p>Awesome! I'll start a video chat with you in a few.<br/><span>07:49</span></p>
      </div>
      {
            array.map((ssssss)=>
            <div>
              <div class="message-box my-message">
        <p>{ssssss.newmessage}<br/><AiTwotoneDelete onClick={()=>deletefunction(ssssss)} /></p>
      </div>
                
                
                </div>
            ) 
        }
    </div>
{/* <!--input-bottom --> */}
    <div class="chatbox-input">
      <i class="fa-regular fa-face-grin"><MdEmojiEmotions /></i>
      <i class="fa-sharp fa-solid fa-paperclip"><GoPaperclip /></i>
      <input type="text" placeholder='Enter your message' class='chat-return' onChange={(event)=>gettingdatafrominput(event)}  />
      <button class='send-button' onClick={()=>storingdata()}> <IoIosSend /> </button>
      <i class="fa-solid fa-microphone"><FaMicrophone /></i>
 
        
      
    </div>
  </div>

</div>
 
       
        
       
    </div>
    
  )
}