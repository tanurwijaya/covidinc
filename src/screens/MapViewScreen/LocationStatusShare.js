import React from 'react';

export default function LocationStatusShare({data}) {
  const { population, confirmed} = data
// const population = 10000000
  const flexConfirmed = confirmed / population * 100
  const flexPopulation = 100 - flexConfirmed
  console.log("Total confirmed case / population = "+flexConfirmed.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'%')

  return (
    <div style={{ flex: 1, paddingLeft: 8, paddingRight: 8, justifyContent:'space-between', display:'flex', flexDirection:'column', height:'100%', border:'1px solid white', borderRadius: '8px', marginLeft:16, marginRight:16 }}>
      <p style={{ color: 'white', textAlign: 'center' }}>World</p>
      <div style={{ height: '4px', marginBottom:'8px', display:'flex', flex:100}}>
      <div style={{backgroundColor: 'red',height: '4px',display:'flex',flex:flexConfirmed}}></div>
        <div style={{backgroundColor: 'cornflowerblue',height: '4px',  display:'flex', flex:flexPopulation}}></div>
        {/* <div style={{backgroundColor: 'transparent',height: '4px',  display:'flex', flex:30}}></div> */}
      </div>
    </div>)
}