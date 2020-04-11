import React from 'react';
import styled from 'styled-components'

export default function CalendarWidget() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return (<CalendarWrapper>
        <CalendarSpanLeft>{dd}</CalendarSpanLeft>
        <CalendarSpanMid>{mm}</CalendarSpanMid>
        <CalendarSpanRight>{yyyy}</CalendarSpanRight>
    </CalendarWrapper>
    )
}

const CalendarWrapper = styled.div`
opacity: 0.8;
align-self : flex-end;
display: flex;
width : auto;
flex: 1;
right : 8;
cursor: pointer;
position: absolute;
border-bottom-right-radius: 4px;
border-bottom-left-radius: 4px;
`

const CalendarSpanLeft = styled.div`
align-self : flex-end;
padding: 10px;
background-color: rgba(0,0,0,0.9);
display: flex;
width : auto;
margin-left : 1px;
flex: 1;
color : white;
font-size : 32px;
border-top-left-radius: 4px;
border-bottom-left-radius: 4px;
`

const CalendarSpanMid = styled.div`
align-self : flex-end;
padding: 10px;
background-color: rgba(0,0,0,0.9);
display: flex;
width : auto;
margin-left : 1px;
flex: 1;
color : white;
font-size : 32px;
`

const CalendarSpanRight = styled.div`
align-self : flex-end;
padding: 10px;
background-color: rgba(0,0,0,0.9);
display: flex;
width : auto;
margin-left : 1px;
flex: 1;
color : white;
font-size : 32px;
border-top-right-radius: 4px;
border-bottom-right-radius: 4px;
`