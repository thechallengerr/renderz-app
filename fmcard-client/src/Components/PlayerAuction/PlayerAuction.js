import React from 'react'
import noAuction from '../../resource/img/no_auction.png'

export default function PlayerAuction() {
    return (
        <div className='w-1/3 p-3 '>
            <div className='bg-[#262c49] w-full flex items-center flex-row border-2 border-[#414561] border-solid rounded-[6px] text-[c2c6dc] p-[24px]'>
                <img alt="" src={noAuction} height={32} className='mr-3'></img>
                <p className='text-left'>
                    Auction and player's price is not yet available
                </p>
            </div>

        </div>
    )
}
