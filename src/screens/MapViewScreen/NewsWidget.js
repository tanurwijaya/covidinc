import React from 'react';
import styled from 'styled-components'

export default function NewsWidget(){
    return(
        <NewsWrapper>
            <div style={{paddingLeft:8, paddingRight: 8, paddingTop:16, paddingBottom:16, backgroundColor:'white', borderRadius: 8, backgroundColor:'black'}}>
            <span style={{ color: 'white' }}><b>News</b></span>
            </div>

        </NewsWrapper>
    )
}

const NewsWrapper = styled.div`
margin-top: 8px;
align-self : center;
background-color: rgba(176,224,230,0.3);
display: flex;
width : 560px;
flex: 1;
padding-left: 8px;
padding-right: 8px;
padding-top: 8px;
padding-bottom: 8px;
cursor: pointer;
`