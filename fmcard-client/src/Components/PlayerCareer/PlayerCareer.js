import React from 'react'
import theme from '../theme/theme';
export default function PlayerCareer({ full_name, career, flag, updatedAt }) {
    return (
        <div className='lg:w-1/4 w-full py-2 px-3'>
            <div className="career-container text-left border-2 border-solid border-[#414561] rounded-[6px] p-3">
                <h3 className="fullname pb-2 mb-2" style={{ borderBottom: `1px solid ${theme.primary.border}` }}>{full_name}</h3>
                <div
                    className="career-item mb-1 pb-1 flex flex-row justify-between"
                    style={{ borderBottom: `1px solid ${theme.primary.border}` }}
                >
                    <div className="text-left flex flex-col justify-content-center">
                        <span className='font-bold'>Club</span>
                        <span className="club_name">{career.club}</span>
                    </div>
                    <div className=" flex items-center">
                        <img src={career.club_img} alt="" height="36" className="club_img"></img>
                    </div>
                </div>
                <div
                    className="career-item mb-1 pb-1 mt-2 flex flex-row justify-between"
                    style={{ borderBottom: `1px solid ${theme.primary.border}` }}
                >
                    <div className=" flex flex-col justify-center">
                        <span className='font-bold'>League</span>
                        <span className="league_name">{career.league}</span>
                    </div>
                    <div className=" flex items-center">
                        <img src={career.league_img} alt="" height="42" className="league_img"></img>
                    </div>
                </div>
                <div
                    className="career-item mb-1 pb-1 border-b-[1px]  mt-2 border-[#414561] flex flex-row justify-between"
                    style={{ borderBottom: `1px solid ${theme.primary.border}` }}
                >
                    <div className="flex flex-col justify-center">
                        <span className='font-bold'>Nation</span>
                        <span className="club_name">{career.nation}</span>
                    </div>
                    <div className="item-right flex items-center">
                        <img src={flag} alt="" height="20" className="club_img"></img>
                    </div>
                </div>
                <div
                    className="career-item mb-1 pb-1 border-b-[1px]  mt-2 border-[#414561] flex flex-row justify-between"
                    style={{ borderBottom: `1px solid ${theme.primary.border}` }}
                >
                    <div className="flex flex-col justify-center">
                        <span className='font-bold'>Update on</span>
                        <span className="club_name">{Date(updatedAt).substring(0, 25)}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
