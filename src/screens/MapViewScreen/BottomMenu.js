import React from 'react';
import styled from 'styled-components'
import InformationWrapper from './InformationWrapper'

export default function BottomMenu({data}) {
    return <BottomWrapper>

        <ButtonLarge color={'red'}><b>Disease</b></ButtonLarge>
        <InformationWrapper data={data} />
        <ButtonLarge color={'cornflowerblue'}><b>World</b></ButtonLarge>



    </BottomWrapper>
}

const BottomWrapper = styled.div`
position: absolute;
bottom : 0;
left:0;
right:0;
display: flex;
flex: 1;
padding: 8px;
background-color: powderblue;
`

const ButtonLarge = styled.button`
background-color:white;
padding-left: 48px;
padding-right: 48px;
padding-top: 8px;
padding-bottom: 8px;
border-radius: 8px;
font-size : large;
color: ${props => props.color ? props.color : "black"};
cursor: pointer;
`
