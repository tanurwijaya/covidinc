import React from 'react';
import styled from 'styled-components'
import InfectedWidget from "./InfectedWidget";
import LocationStatusShare from "./LocationStatusShare";
import DeadWidget from "./DeadWidget";

export default function InformationWrapper({ data }) {
    const { confirmed, deaths } = data
    return (
        <Wrapper>
            <InfectedWidget confirmed={confirmed} />
            <LocationStatusShare data={data} />
            <DeadWidget deaths={deaths} />
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