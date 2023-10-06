import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import PlayerCard from '../Players/PlayerCard';
import { LastestPlayers, Container } from './PlayerList.style';
import { Line } from '../Partner/Partner';
import { Link } from 'react-router-dom';

const TotwPlayersList = styled(LastestPlayers)`
  grid-template-columns: repeat(7, 1fr);
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
`
const TotwContainer = styled(Container)`
  justify-content:center;
`
export default function TotwList() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8888/events/heartbreakers_22').then(res => res.json()).then((result) => {
      setPlayers([...result])
    }).catch(err => console.log(err))
  }, []);


  return (
    <>
      <TotwContainer>
        <Line></Line>
        <div>
          <h3 style={{ marginTop: '16px', fontWeight: '400', fontFamily: 'DINProCondBold' }}>Lastest TOTW Players (<a href='/players' style={{ fontSize: '14px' }}>see all...</a>)</h3>
          <TotwPlayersList>

            {players && players.map((player, index) => {
              if (index < 7) {

                return (
                  <Link to={`/players/${player._id}`} key={player._id}>
                    <PlayerCard key={index} data={player} border='1px solid #414561' />
                  </Link>
                )
              }
            }
            )}
          </TotwPlayersList>
        </div>
      </TotwContainer>

    </>
  )
}
