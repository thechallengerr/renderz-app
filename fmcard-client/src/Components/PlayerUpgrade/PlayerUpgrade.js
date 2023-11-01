import React from 'react'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function PlayerUpgrade() {
    return (
        <div className='lg:w-1/3  w-full my-3 flex flex-col items-center justify-start p-3'>
            <div className='w-full flex flex-row items-center border-2 border-orange-500 border-solid rounded-[6px] text-orange-500 p-[24px] bg-[#262c49]'>
                <div className='mr-3'>
                    <WarningAmberIcon style={{ fontSize: '32px' }}></WarningAmberIcon>
                </div>
                <p className='text-left'>
                    Leveling is not yet available. We're working hard on making it available as soon as possible.
                </p>
            </div>
            <div className="w-full cursor-pointer p-3 rounded-[4px] flex items-center justify-center mt-3 border border-solid border-[#7367f0] hover:bg-[#262c49]">
                <span className='text-[#7367f0]'>Download Card</span>
            </div>
        </div>
    )
}
