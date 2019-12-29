import React from 'react';
import '../styles/menu-item.styles.scss'
import {withRouter} from 'react-router-dom';
const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) =>
{
  console.log("hello")
  console.log(`${match.url}${linkUrl}`);
  return (
    // when we click image, we fire up anevent listener that push url params into history
    <div  className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      
    <div style={{
      backgroundImage:`url(${imageUrl})`
    }} className='background-image'/>

    <div className='content'>
      <div className='title'>{title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)
}


export default  withRouter(MenuItem);