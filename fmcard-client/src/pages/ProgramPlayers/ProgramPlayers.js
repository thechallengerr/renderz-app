import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PlayerCard from '../../Components/Players/PlayerCard';
import { Link } from 'react-router-dom';

function ProgramPlayers() {
    const [players, setPlayers] = useState([]);
    const { slug } = useParams();
    console.log(slug);
    useEffect(() => {
        const fetchPlayer = (slug) => {
            fetch(`http://localhost:8888/events/${slug}`)
                .then(res => res.json())
                .then(data => {
                    setPlayers(data);
                })
        }

        fetchPlayer(slug)
    }, []);
    return (
        <>
            <div className='px-16 py-32'>
                <div className='text-white p-5 rounded-[6px] bg-[#10163a]'>
                    <div className='gap-7 grid-cols-7 grid p-[16px]'>
                        {players.map((player, index) => {
                            return (
                                <Link to={`/players/${player._id}`} key={player._id}>
                                    <PlayerCard data={player} border='true'/>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgramPlayers