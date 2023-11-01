import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Pagination({ totalPlayers, currentPage, paginate, note }) {
    let totalPages = Math.ceil(totalPlayers / 18)
    let pageLists = []
    for (let index = 1; index <= totalPages; index++) {

        pageLists.push(index)
    }
    return (
        <>
            <div className=' flex flex-col w-full'>
                <div className='pagination'>
                    <ul className='flex flex-row list-none justify-end'>
                        <li
                            onClick={() => { paginate(currentPage - 1) }}
                            className='cursor-pointer w-[28px] h-[32px] md:h-[36px] md:w-[36px] text-center p-2 border border-[#ddd] border-solid flex items-center justify-center hover:bg-[#5b53c4]' >
                            <span className=' md:text-lg text-sm flex items-center justify-center'>
                                <ArrowBackIosIcon style={{ fontSize: '16px' }}></ArrowBackIosIcon>
                            </span>
                        </li>
                        <li
                            onClick={() => { paginate(1) }}
                            className={`cursor-pointer w-[28px] md:h-[36px] md:w-[36px] text-center p-2 border border-[#ddd] border-solid hover:bg-[#5b53c4] lg:text-[22px] md:text-[16px] text-[12px] ${currentPage === 1 ? 'bg-[#5b53c4]' : ''}`}>
                            1
                        </li>
                        <li
                            style={{ display: currentPage >= 4 ? 'block' : 'none' }}
                            className={`cursor-pointer w-[28px] h-[32px] md:h-[36px] md:w-[36px] text-center p-2 border border-[#ddd] border-solid hover:bg-[#5b53c4] lg:text-[22px] md:text-[16px] text-[12px]`}
                        >
                            ...
                        </li>
                        <li
                            onClick={() => { paginate(currentPage > 3 ? currentPage - 1 : 2) }}
                            className={`cursor-pointer w-[28px] h-[32px] md:h-[36px] md:w-[36px] text-center p-2 border border-[#ddd] border-solid hover:bg-[#5b53c4] lg:text-[22px] md:text-[16px] text-[12px] ${currentPage === (currentPage > 3 ? currentPage - 1 : 2) ? 'bg-[#5b53c4]' : ''}`}
                        >
                            {currentPage > 3 ? currentPage - 1 : 2}
                        </li>
                        <li
                            style={{ display: currentPage === totalPages ? 'none' : 'block' }}
                            onClick={() => { paginate(currentPage > 3 ? currentPage : 3) }}
                            className={`cursor-pointer w-[28px] h-[32px] md:h-[36px] md:w-[36px] text-center p-2 border border-[#ddd] border-solid hover:bg-[#5b53c4] lg:text-[22px] md:text-[16px] text-[12px] ${currentPage === (currentPage > 3 ? currentPage - 1 : 3) ? 'bg-[#5b53c4]' : ''}`}
                        >
                            {currentPage > 3 ? currentPage : 3}
                        </li>
                        <li
                            style={{ display: currentPage >= totalPages - 1 ? 'none' : 'block' }}
                            onClick={() => { paginate(currentPage > 3 ? currentPage + 1 : 4) }}
                            className={`cursor-pointer w-[28px] h-[32px] md:h-[36px] md:w-[36px] text-center p-2 border border-[#ddd] border-solid hover:bg-[#5b53c4] lg:text-[22px] md:text-[16px] text-[12px] ${currentPage === (currentPage > 3 ? currentPage + 1 : 4) ? 'bg-[#5b53c4]' : ''}`}

                        >
                            {currentPage > 3 ? currentPage + 1 : 4}
                        </li>
                        <li
                            style={{ display: currentPage <= 20 ? 'block' : 'none' }}
                            className={`cursor-pointer w-[28px] h-[32px] md:h-[36px] md:w-[36px] text-center p-2 border border-[#ddd] border-solid hover:bg-[#5b53c4] lg:text-[22px] md:text-[16px] text-[12px]`}
                        >
                            ...
                        </li>
                        <li
                            onClick={() => { paginate(totalPages) }}
                            className={`cursor-pointer w-[28px] h-[32px] md:h-[36px] md:w-[36px] text-center p-2 border border-[#ddd] border-solid hover:bg-[#5b53c4] lg:text-[22px] md:text-[16px] text-[12px] ${currentPage === totalPages ? 'bg-[#5b53c4]' : ''}`}
                        >
                            {totalPages}
                        </li>
                        <li
                            onClick={() => { paginate(currentPage + 1) }}
                            className='cursor-pointer w-[28px] h-[32px] md:h-[36px] md:w-[36px] text-center p-2 border border-[#ddd] border-solid flex items-center hover:[background-color:#5b53c4]'>
                            <span className=' md:text-lg text-sm flex items-center justify-center'>
                                <ArrowForwardIosIcon style={{ fontSize: '16px' }}></ArrowForwardIosIcon>

                            </span>
                        </li>

                    </ul>
                </div>
                {note && (
                    <>
                        <span className='text-white text-right  lg:text-[22px] md:text-[16px] text-[12px]'>Page {currentPage}/{totalPages} ( total players: {totalPlayers})</span>
                        <span className='text-white text-right md:text-sm italic lg:text-[22px] text-[12px]'>Display 18 player per page</span>
                    </>
                )}
            </div>
        </>
    )
}

export default React.memo(Pagination)
