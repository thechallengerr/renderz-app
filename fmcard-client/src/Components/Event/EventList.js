import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Container, LastestPlayers } from '../PlayersList/PlayerList.style';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';

const EventsContainer = styled(Container)`
    justify-content:center;
    

`

export default function EventList() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://renderz-app.onrender.com/events?noOfEvents=5').then(res => res.json()).then((result) => {
            // console.log(result);
            setEvents([...result])
        }).catch(err => console.log(err))
        return () => {

        };
    }, []);
    return (
        <>
            <div
                className='flex-wrap border-box w-full md:px-8 px-2 py-4 flex items-center lg:justify-between lg:flex-row md:flex-col  relative justify-center'
                style={{ boxShadow: '0 4px 25px 0 rgba(0,0,0,.1)' }}
            >
                <div style={{ width: '100%' }}>
                    <h3 style={{ fontWeight: '400', fontFamily: 'DINProCondBold', }} className='mb-6 lg:mb-0 md:text-[22px] text-[14px]'>
                        Lastest Programs <a href='/programs' className='md:text-[14px] text-[10px]'>(see all...)</a>
                    </h3>
                    <div className='flex items-center justify-center gap-3 md:gap-5 md:py-4 flex-wrap overflow-hidden md:h-[180px] h-[120px]'>

                        {events && events.map((event, index) => {
                            return (
                                <Link
                                    to={`/programs/${event.event_slug}`}
                                    className='hover:no-underline max-w-1/2 w-[30%] lg:w-[18%]'
                                    key={index}
                                >
                                    <EventCard key={index} data={event} />
                                </Link>
                            )
                        }
                        )}
                    </div>
                    {/* <LastestEvents>
                        {events && events.map((event, index) => {
                            return (
                                <Link to={`/programs/${event.event_slug}`} className='hover:no-underline scale-[80%] md:scale-[100%]' key={index}>
                                    <EventCard key={index} data={event} />
                                </Link>
                            )
                        })}
                    </LastestEvents> */}
                </div>
            </div>

        </>
    )
}
