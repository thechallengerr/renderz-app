import React, { useState, useEffect } from 'react'

import logo2_200 from '../../resource/img/logo2_200.png'
import PlayerCard from '../Players/PlayerCard';
import { LastestPlayers, Container, Left } from './PlayerList.style';
import { Link } from "react-router-dom";

export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('https://renderz-app.onrender.com/').then(res => res.json()).then((result) => {
      setPlayers([...result])
    }).catch(err => console.log(err))
    return () => {

    };
  }, []);


  return (
    <>
      <Container>
        <div className='col-6 card-border'>
          <Left >
            <img alt="" className='mx-auto' height={200} src={logo2_200}></img>
          </Left>
        </div>
        <div>
          <h3 style={{ margin: '4px', fontWeight: '400', fontFamily: 'DINProCondBold' }}>Lastest Players (<a href='/players' style={{ fontSize: '14px' }}>see all...</a>)</h3>
          <LastestPlayers>

            {players && players.map((player, index) => {
              return (
                <Link to={`/players/${player._id}`} key={player._id}>
                  <PlayerCard key={index} data={player} border='true' />
                </Link>
              )
            }
            )}
          </LastestPlayers>
        </div>
      </Container>

    </>
  )
}
