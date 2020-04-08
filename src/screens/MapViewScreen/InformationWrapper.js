import React from 'react';
import styled from 'styled-components'
import InfectedWidget from "./InfectedWidget";
import LocationStatusShare from "./LocationStatusShare";
import DeadWidget from "./DeadWidget";

export default function InformationWrapper() {
    return (
        <Wrapper>
            <InfectedWidget />
            <LocationStatusShare />
            <DeadWidget />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding-left : 32px;
  padding-right : 32px;
  padding-top: 4px;
  padding-bottom : 4px;
  margin-left : 8px;
  margin-right : 8px;
  background-color: black;
  border-radius: 8px;
`