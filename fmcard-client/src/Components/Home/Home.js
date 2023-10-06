import React from 'react'
import styled from 'styled-components';
import theme from '../theme/theme';
import PlayerList from '../PlayersList/PlayerList';
import EventList from '../Event/EventList';
import TotwList from '../PlayersList/TotwList';
import Partner from '../Partner/Partner';
const Wrapper = styled.div`
    background-color:${theme.primary.main};
    width:100%;
    margin-left:auto;
    margin-right:auto;
    max-width:1250px;
    margin-top:32px;
    color: ${theme.text.main};
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction : column;
    border-radius:6px;
`
export default function Home() {
  // console.log(events);
  return (
    <div style={{padding:'2.2rem'}}>
      <Wrapper>
        <PlayerList />
        <EventList />
        <TotwList />
        <Partner />
      </Wrapper>
    </div>

  )
}
