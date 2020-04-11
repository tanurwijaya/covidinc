import React from 'react';

export default function InfectedWidget({confirmed = 0}) {
  return (
    <div style={{ paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <span style={{ color: 'white' }}><b>Infected</b></span>
      <p style={{ color: 'red' }}>{confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
    </div>)
}