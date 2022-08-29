import React from 'react';
import './Posts.css';
import Panel from '../Panel/Panel';
import check from '../Icons/check.svg';
import down from '../Icons/down.svg';


export default function Posts({ author, content, image, date }) {
  return (
    <div>
        <div className='personInfo'>
        <img className='avka' src={author.photo}></img>
        <div className='personName'>{author.name}</div>
        <img className='check' src={check}></img>
        <div className='personMail'>{author.nickname}</div>
        <div className='personDate'>{date}</div>
        <img className='down' src={down}></img>
        <div className='personContent'>{content}</div>
    </div>
    <div>
      <img className='mainImg' src={image}></img>
    </div>
      <Panel />
    </div>
  )
}
