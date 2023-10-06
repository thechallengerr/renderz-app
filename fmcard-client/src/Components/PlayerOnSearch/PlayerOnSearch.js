import React from 'react'
import PlayerCard from '../Players/PlayerCard';
import { Link } from 'react-router-dom';
function PlayerOnSearch({ player, link }) {
    return (
        <>
            {link ?
                (
                    <Link to={'/players/' + player._id} className='hover:no-underline flex flex-row hover:bg-[#262c49]'>
                        <PlayerCard data={player} />
                        <div className='flex items-center justify-start w-2/3 ps-2'>
                            <div className='text-white w-full flex item-center flex-col'>
                                <h3 className='text-left my-2'>{player.full_name}</h3>
                                <span className='text-left'>
                                    {player.rating} | {player.position}
                                </span>
                            </div>
                        </div>
                    </Link>
                ) :
                (
                    <div className='hover:no-underline flex flex-row hover:bg-[#262c49]'>
                        <PlayerCard data={player} playerImageOnly={true}/>
                        <div className='flex items-center justify-start w-2/3 ps-2'>
                            <div className='text-white w-full flex item-center flex-col'>
                                <h3 className='text-left my-2'>{player.full_name}</h3>
                                <span className='text-left'>
                                    {player.rating} | {player.position}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default PlayerOnSearch