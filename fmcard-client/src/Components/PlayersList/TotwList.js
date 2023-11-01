import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import PlayerCard from '../Players/PlayerCard';
import { LastestPlayers, Container } from './PlayerList.style';
import { Line } from '../Partner/Partner';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../hook/useDimension';
// const TotwPlayersList = styled(LastestPlayers)`
//   grid-template-columns: repeat(7, 1fr);
//   justify-content: space-evenly;
//   justify-items: center;
//   align-content: space-evenly;
//   align-items: center;
//   @media only screen and (max-width:1300px) {
//     grid-template-columns: repeat(5, 1fr);
//     overflow-y: hidden;
//     a:nth-last-child(-n + 2) {
//       display: none;
//     }
//   }
//   @media only screen and (max-width:768px) {
//     grid-template-columns: repeat(3, 1fr);
//     overflow-y: hidden;
//     a:nth-last-child(-n + 1) {
//       display: none;
//     }
//   }
//   @media only screen and (max-width:576px) {
//     grid-template-columns: repeat(2, 1fr);
//     overflow-y: hidden;
//     a:nth-last-child(-n + 3) {
//       display: none;
//     }
//   }
// `

export default function TotwList() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('https://renderz-app.onrender.com/events/heartbreakers_22').then(res => res.json()).then((result) => {
      setPlayers([...result])
    }).catch(err => console.log(err))
  }, []);

  const { width } = useWindowDimensions()

  return (
    <>
      <div
        className='flex-wrap border-box w-full md:px-8 px-2 py-4 flex items-center lg:justify-between lg:flex-row md:flex-col  relative justify-center'
        style={{ boxShadow: '0 4px 25px 0 rgba(0,0,0,.1)' }}
      >
        <Line></Line>
        <div>
          <h3
            className='md:text-[22px] text-[14px]'
            style={{ marginTop: '16px', fontWeight: '400', fontFamily: 'DINProCondBold' }}>Lastest TOTW Players (<a href='/players' className='md:text-[14px] text-[10px]'>see all...</a>)</h3>
          <div className='flex items-center justify-center gap-3 md:gap-5 md:py-4 flex-wrap sm:h-[180px] xs:h-[140px] h-[90px] overflow-hidden'>

            {players && players.map((player, index) => {
              return (
                <Link to={`/players/${player._id}`} key={player._id} className='max-w-1/2 w-[30%]  lg:w-[14%] xl:w-[14%]'>
                  <PlayerCard key={index} data={player} border='true' size={width < 576 ? 'sm' : ''} />
                </Link>
              )
            }
            )}
          </div>
        </div>
      </div>

    </>
  )
}
