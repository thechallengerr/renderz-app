import React from 'react'
import PlayerCard from './PlayerCard'
import theme from '../theme/theme'
import PlayerStats from './PlayerStats'
import GkStats from './GkStats'
import PlayerInfo from './PlayerInfo'
import { Link } from 'react-router-dom'


// const PlayerCardNoBorder = styled(PlayerCard)`
//     border: none;
// `
export default function PlayerRow({ player }) {
    return (
        <>
            <Link
                to={'/players/' + player._id}
                className='flex flex-row items-center w-full hover:no-underline hover:bg-[#262c48]'
                style={{ borderBottom: `1px solid ${theme.primary.border}` }}>
                <PlayerCard data={player} size='' border='' />
                <PlayerInfo

                    fullname={player.full_name}
                    ovr={player.rating}
                    position={player.position}
                    country={player.flag}
                    info={player.career} />

                <div className='player-row w-3/4 md:w-unset'>
                    {player.position === 'GK' ? <GkStats stats={player.stats} /> : (<PlayerStats stats={player.stats} />)}

                </div>
            </Link>
        </>
    )
}
