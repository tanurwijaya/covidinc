import React from 'react';

export default function DeadWidget({deaths = 0}) {
  return (
    <div style={{ paddingTop: 4, paddingBottom:4, paddingLeft: 16, paddingRight: 16}}>
      <span style={{color:'white'}}><b>Dead</b></span>
      <p style={{color:'white'}}>{deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
    </div>)
}