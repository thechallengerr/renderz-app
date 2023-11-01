import React from 'react'

export default function DetailStats({ isGk, stats }) {
    let statsEdited = []
    if (isGk) {
        statsEdited = [
            {
                name: 'Diving',
                numbers: [
                    {
                        label: 'GK Diving',
                        number: stats.diving_1
                    }
                ]
            },
            {
                name: 'Positioning',
                numbers: [
                    {
                        label: 'GK Positioning',
                        number: stats.positioning_1
                    }]
            },
            {
                name: 'Handling',
                numbers: [
                    {
                        label: 'Handling',
                        number: stats.handling_1
                    }]
            },
            {
                name: 'Reflexes',
                numbers: [
                    {
                        label: 'Reflexes',
                        number: stats.reflexes_1
                    },
                    {
                        label: 'Jumping',
                        number: stats.reflexes_2
                    }],
            },
            {
                name: 'Kicking',
                numbers: [
                    {
                        label: 'GK Kicking',
                        number: stats.kicking_1
                    },
                    {
                        label: 'Long Passing',
                        number: stats.kicking_2
                    }]
            },
            {
                name: 'Physical',
                numbers: [
                    {
                        label: 'Reactions',
                        number: stats.physical_1
                    },
                    {
                        label: 'Agility',
                        number: stats.physical_2
                    },
                    {
                        label: 'Sprint Speed',
                        number: stats.physical_3
                    }]
            },


        ]
    } else {
        statsEdited = [
            {
                name: 'Pace',
                numbers: [
                    {
                        label: 'Acceleration',
                        number: stats.pace_1
                    }, {
                        label: 'Sprint Speed',
                        number: stats.pace_2
                    }
                ]
            },
            {
                name: 'Shooting',
                numbers: [
                    {
                        label: 'Positioning',
                        number: stats.shooting_1
                    },
                    {
                        label: 'Finishing',
                        number: stats.shooting_2
                    },
                    {
                        label: 'Shot Power',
                        number: stats.shooting_3
                    },
                    {
                        label: 'Long Shot',
                        number: stats.shooting_4
                    },
                    {
                        label: 'Volley',
                        number: stats.shooting_5
                    },
                    {
                        label: 'Penalties',
                        number: stats.shooting_6
                    }]
            },
            {
                name: 'Passing',
                numbers: [
                    {
                        label: 'Vision',
                        number: stats.passing_1
                    },
                    {
                        label: 'Crossing',
                        number: stats.passing_2
                    },
                    {
                        label: 'Freekick',
                        number: stats.passing_3
                    },
                    {
                        label: 'Short Passing',
                        number: stats.passing_4
                    },
                    {
                        label: 'Long Passing',
                        number: stats.passing_5
                    },
                    {
                        label: 'Curve',
                        number: stats.passing_6
                    }]
            },
            {
                name: 'Agility',
                numbers: [
                    {
                        label: 'Agility',
                        number: stats.agility_1
                    },
                    {
                        label: 'Balance',
                        number: stats.agility_2
                    },
                    {
                        label: 'Reactions',
                        number: stats.agility_3
                    },
                    {
                        label: 'Ball Control',
                        number: stats.agility_4
                    },
                    {
                        label: 'Dribbling',
                        number: stats.agility_5
                    }],
            },
            {
                name: 'Defending',
                numbers: [
                    {
                        label: 'Intterceptions',
                        number: stats.defending_1
                    },
                    {
                        label: 'Heading',
                        number: stats.defending_2
                    },
                    {
                        label: 'Marking',
                        number: stats.defending_3
                    },
                    {
                        label: 'Standing Tackle',
                        number: stats.defending_4
                    },
                    {
                        label: 'Sliding Tackle',
                        number: stats.defending_5
                    }]
            },
            {
                name: 'Physical',
                numbers: [
                    {
                        label: 'Jumping',
                        number: stats.physical_1
                    },
                    {
                        label: 'Strength',
                        number: stats.physical_2
                    },
                    {
                        label: 'Aggression',
                        number: stats.physical_3
                    }]
            },
        ]
    }
    // console.log(statsEdited);
    return (
        <div className='lg:w-3/4 w-full mt-3 md:mt-0'>
            <PlayerDetailStats stats={statsEdited} />
        </div>
    )
}

const PlayerDetailStats = ({ stats }) => {

    return (
        <>
            <div className='w-full flex flex-row justify-between flex-wrap'>
                {
                    stats.map((stat, index) => {
                        return (
                            <StatGroup name={stat.name} numbers={stat.numbers} key={index} />
                        )
                    })
                }

            </div>
        </>
    )
}
const StatGroup = ({ name, numbers }) => {
    const avg = (array) => {
        return Math.round(array.reduce((acc, cur) => (Number(acc) + Number(cur.number)), 0) / array.length)
    }
    const statColor = (stat) => {
        switch (true) {
            case stat >= 80:
                return '#35a936'
            // break;
            case stat >= 70 && stat < 80:
                return '#8bcb4f'
            case stat < 70 && stat >= 60:
                return '#e5aa53'
            case stat < 60:
                return '#923336'
            default:
                break;
        }
    }
    return (
        <>
            <div className="stat-group flex flex-col mx-3 xl:w-[12%] md:w-[25%] w-[40%] mt-3 grow-0 shrink-0">
                <div className="gauge">
                    <div className='mb-3'>

                        <span className="stat-type font-bold uppercase ">{name}</span>
                    </div>
                    <div className="flex justify-center mb-3">
                        <span className="avg text-center text-[28px]" style={{ color: statColor(avg(numbers)) }}>
                            {
                                avg(numbers)
                            }
                        </span>

                    </div>
                    <div className="meter w-full h-[10px] relative bg-slate-600 rounded-[5px] mb-3">
                        <span
                            className="absolute left-0 right-[100%] h-[100%] rounded-[5px] transition-[width] ease-in-out duration-300"
                            style={{
                                width: avg(numbers) / 140 * 100 + '%',
                                backgroundColor: statColor(avg(numbers)),
                            }}></span>
                    </div>
                </div>
                <div className="stat-detail-list">

                    {numbers.map((number, index) => {
                        return (
                            <div className="stat-detail-item flex flex-row justify-between" key={index}>
                                <span className="stat-label text-sm">{number.label}</span>
                                <span
                                    className={`stat-data text-sm`}
                                    style={{ color: statColor(Number(number.number)) }}
                                >{number.number}</span>
                            </div>
                        )
                    })}


                </div>
            </div>
        </>
    )
}