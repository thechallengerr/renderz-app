import React from 'react'

export default function PlayerInfo({ fullname, ovr, position, info, country }) {
    return (
        <>
            <div className='flex text-white justify-start md:w-3/5 w-2/5 ms-2'>
                <div className='xs:flex hidden flex-col items-start justify-center md:me-5 lg:w-2/5 w-full max-w-full'>
                    <span className='font-semibold lg:text-[22px] md:text-[16px] text-[12px]'>{fullname}</span>
                    <span className=' lg:text-[22px] md:text-[16px] text-[12px]'>{ovr} | {position}</span>
                </div>
                <div className='lg:w-1/6 lg:block hidden'></div>

                <div className="player-info lg:flex flex-col items-start justify-center w-2/5 hidden">

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
