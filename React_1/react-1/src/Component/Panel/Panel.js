import React from 'react'
import './Panel.css';
import Like from '../Icons/Like.svg';
import download from '../Icons/download.svg';
import retweet from '../Icons/retweet.svg';
import message from '../Icons/message.svg';


export default function Panel() {
  return (
    <div id='downIcons'>
        <div id='sms'>
            <img src={message} className='button' onClick={1}></img>
            <div id='countSms'>{432}</div>
        </div>
        <div id='retweet'>
            <img src={retweet} className='button' ></img>
            <div id='countretweet'>{2}</div>
        </div>
        <div id='like'>
            <img src={Like} className='button' onClick={1}></img>
            <div id='countLike'>{258}</div>
        </div>
        <img src={download}></img>
    </div>
  )
}
