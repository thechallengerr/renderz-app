import React from 'react'



export default function PlayerStats({ stats }) {
    return (
        <div className="card-avg-stats flex flex-row col-lg-6 col-sm-7 text-white">
            <div className="stat-group m-2 flex flex-col items-center">
                <span className="stat-number text-uppercase lg:text-[22px] md:text-[16px] text-[12px]">
                    {
                        Math.round((stats.pace_1 + stats.pace_2) / 2)
                    }
                </span>
                <div className="stat-type lg:text-[22px] md:text-[16px] text-[12px]">PAC</div>
            </div>
            <div className="stat-group m-2 flex flex-col items-center">
                <span className="stat-number text-uppercase lg:text-[22px] md:text-[16px] text-[12px]">
                    {
                        Math.round((stats.shooting_1 + stats.shooting_2 + stats.shooting_3 + stats.shooting_4 + stats.shooting_5 + stats.shooting_6) / 6)
                    }

                </span>
                <div className="stat-type lg:text-[22px] md:text-[16px] text-[12px] ">SHO</div>
            </div>
            <div className="stat-group m-2 flex flex-col items-center">
                <span className="stat-number text-uppercase lg:text-[22px] md:text-[16px] text-[12px]">
                    {
                        Math.round((stats.passing_1 + stats.passing_2 + stats.passing_3 + stats.passing_4 + stats.passing_5 + stats.passing_6) / 6)
                    }
                </span>
                <div className="stat-type lg:text-[22px] md:text-[16px] text-[12px]">PAS</div>
            </div>
            <div className="stat-group m-2 flex flex-col items-center">
                <span className="stat-number text-uppercase lg:text-[22px] md:text-[16px] text-[12px]">
                    {
                        Math.round((stats.agility_1 + stats.agility_2 + stats.agility_3 + stats.agility_4 + stats.agility_5) / 5)
                    }
                </span>
                <div className="stat-type lg:text-[22px] md:text-[16px] text-[12px]">AGI</div>
            </div>
            <div className="stat-group m-2 flex flex-col items-center">
                <span className="stat-number text-uppercase lg:text-[22px] md:text-[16px] text-[12px]">
                    {
                        Math.round((stats.defending_1 + stats.defending_2 + stats.defending_3 + stats.defending_4 + stats.defending_5) / 5)
                    }
                </span>
                <div className="stat-type lg:text-[22px] md:text-[16px] text-[12px]">DEF</div>
            </div>
            <div className="stat-group m-2 flex flex-col items-center">
                <span className="stat-number text-uppercase lg:text-[22px] md:text-[16px] text-[12px]">
                    {
                        Math.round((stats.physical_1 + stats.physical_2 + stats.physical_3) / 3)
                    }
                </span>
                <div className="stat-type lg:text-[22px] md:text-[16px] text-[12px]">PHY</div>
            </div>
        </div>
    )
}
