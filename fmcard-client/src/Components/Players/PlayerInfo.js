import React from 'react'

export default function PlayerInfo({ fullname, ovr, position, info, country }) {
    return (
        <>
            <div className='flex text-white justify-start w-3/5 ms-2'>
                <div className='flex flex-col items-start justify-center me-5 w-2/5'>
                    <span className='font-semibold'>{fullname}</span>
                    <span>{ovr} | {position}</span>
                </div>
                <div className='w-1/6'></div>

                <div className="player-info flex flex-col items-start justify-center w-2/5">

                    <div className='player-club flex flex-row-reverse items-start justify-center me-3'>
                        <span className='club-name text-ellipsis overflow-hidden'>{info.club}</span>
                        <div className='club-image me-2'>
                            <img src={info.club_img} alt="" height={24}></img>
                        </div>
                    </div>
                    <div className='player-country flex flex-row-reverse items-start justify-center'>
                        <span className='club-name'>{info.nation}</span>
                        <div className='club-image me-2'>
                            <img src={country} alt="" height={16}></img>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
