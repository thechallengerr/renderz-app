import React, { useState, useEffect } from 'react'

import logo2_200 from '../../resource/img/logo2_200.png'
import PlayerCard from '../Players/PlayerCard';
import { Container, Left } from './PlayerList.style';
import { Link } from "react-router-dom";
import useWindowDimensions from '../../hook/useDimension';
export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://renderz-app.onrender.com/').then(res => res.json()).then((result) => {
      setPlayers([...result])
      setLoading(false);
    }).catch(err => console.log(err))
    return () => {

    };
  }, []);

  const { width } = useWindowDimensions()
  console.log(width);
  return (
    <>
      <div className='flex-wrap border-box w-full md:px-8 px-2 py-8 flex items-center lg:justify-between lg:flex-row md:flex-col  relative justify-center'
        style={{ boxShadow: '0 4px 25px 0 rgba(0,0,0,.1)' }}
      >
        {/* {loading &&
          <div className='w-full bg-[#262c48] h-[100vh]'>
            <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">

              <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#7367f0]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>} */}
        <div className='lg:w-1/2 w-full  mb-5 lg:mb-0 l lg:pr-5 px-4 lg:px-0'>
          <div className='card-border p-[80px]'

            style={{
              background: `url(https://assets-prod.frzdb.net/img/f76a4c0.jpg) 50% no-repeat`,
              backgroundSize: 'cover'
            }}>
            <img alt="" className='mx-auto w-[100px] md:w-[200px]' src={logo2_200}></img>
          </div>
        </div>
        <div className='lg:w-1/2 w-full md:mt-0 mt-5'>
          <h3
            className='md:text-[22px] text-[14px]'
            style={{ margin: '4px', fontWeight: '400', fontFamily: 'DINProCondBold', marginBottom: 12 }}>
            Lastest Players (<a href='/players' className='md:text-[14px] text-[10px]'>see all...</a>)
          </h3>
          <div className='flex items-center justify-center gap-3 md:gap-5 md:py-4 flex-wrap'>

            {players && players.map((player, index) => {
              return (
                <Link
                  to={`/players/${player._id}`} key={player._id}
                  className='max-w-1/2 w-[30%]'>
                  <PlayerCard key={index} data={player} border='true' size={''} />
                </Link>
              )
            }
            )}
          </div>
        </div>
      </div >

    </>
  )
}
