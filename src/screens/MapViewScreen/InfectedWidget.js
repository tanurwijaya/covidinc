import React from 'react';

export default function InfectedWidget() {
  return (
    <div style={{ paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <span style={{ color: 'white' }}>Infected</span>
      <p style={{ color: 'white' }}>0</p>
    </div>)
}