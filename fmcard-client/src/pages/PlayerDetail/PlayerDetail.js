import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlayerCard from '../../Components/Players/PlayerCard';
import DetailStats from '../../Components/DetailStats/DetailStats';
import PlayerCareer from '../../Components/PlayerCareer/PlayerCareer';
import PlayerUpgrade from '../../Components/PlayerUpgrade/PlayerUpgrade';
import PlayerAuction from '../../Components/PlayerAuction/PlayerAuction';
import Loader from '../../Components/Loader/Loader';
export default function PlayerDetail() {
    const [player, setPlayer] = useState({});
    const [career, setCareer] = useState({});
    const [stats, setStats] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    // console.log(id);
    useEffect(() => {
        const fetchPlayer = (id) => {
            fetch(`https://renderz-app.onrender.com/players/${id}`)
                .then(res => res.json())
                .then(player => {
                    setPlayer({ ...player })
                    setCareer({ ...player.career })
                    setStats({ ...player.stats })
                    setLoading(false)
                }
                )
                .catch(err => {
                    throw new Error(err)
                })

        }
        fetchPlayer(id)

    }, [id]);
    console.log(stats);
    return (
        <>
            {loading ? <Loader />
                : (
                    <>
                        <div className='text-white xl:px-32 lg:px-20 md:px-12 px-4 py-16 '>
                            <div className='flex flex-col items-center bg-[#10163a] p-5 rounded-[6px]'>
                                <div className='flex w-full justify-between flex-col md:flex-row flex-wrap'>
                                    <div className='lg:w-1/4 md:mr-5 w-full'>
                                        <PlayerCard data={player} size='lg' border='' />
                                    </div>
                                    <PlayerUpgrade />
                                    <PlayerAuction />
                                </div>
                                <div className='flex lg:flex-row flex-col items-start justify-start w-full'>
                                    <PlayerCareer full_name={player.full_name} career={career} flag={player.flag} updatedAt={player.updatedAt} />
                                    <DetailStats isGk={player.position === 'GK'} stats={stats} />
                                </div>
                            </div>
                        </div>
                    </>
                )}
        </>
    )
}
