import React from 'react'

export default function GkStats({ stats }) {
    return (
        <div className="card-avg-stats flex flex-row col-lg-6 col-sm-7 text-white">
            <div className="stat-group m-2 flex flex-col items-center">
                <span className="stat-number text-uppercase lg:text-[22px] md:text-[16px] text-[12px]">
                    {
                        Math.round(stats.diving_1)
                    }
                </span>
                <div className="stat-type lg:text-[22px] md:text-[16px] text-[12px]">DIV</div>
            </div>
            <div className="stat-group m-2 flex flex-col items-center">
                <span className="stat-number text-uppercase lg:text-[22px] md:text-[16px] text-[12px]">
                    {
                        Math.round(stats.positioning_1)
                    }

                </span>
                <div className="stat-type lg:text-[22px] md:text-[16px] text-[12px] ">POS</div>
            </div>
            <div className="stat-group m-2 flex flex-col items-center">
                <span className="stat-number text-uppercase lg:text-[22px] md:text-[16px] text-[12px]">
                    {
                        Math.round(stats.handling_1)
                    }
                </span>
                <div className="stat-type lg:text-[22px] md:text-[16px] text-[12px]">HAN</div>
            </div>
            <div className="stat-group m-2 flex flex-col items-center">
                <span className="stat-number text-uppercase lg:text-[22px] md:text-[16px] text-[12px]">
                    {
                        Math.round((stats.reflexes_1 / 2 + stats.reflexes_2 / 2))
                    }
                </span>
                <div className="stat-type lg:text-[22px] md:text-[16px] text-[12px]">REF</div>
            </div>
            <div className="stat-group m-2 flex flex-col items-center">
                <span className="stat-number text-uppercase lg:text-[22px] md:text-[16px] text-[12px]">
                    {
                        Math.round((stats.kicking_1 / 2 + stats.kicking_2 / 2))

                    }
                </span>
                <div className="stat-type lg:text-[22px] md:text-[16px] text-[12px]">KIC</div>
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
