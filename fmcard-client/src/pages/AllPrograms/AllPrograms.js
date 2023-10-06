import React, { useEffect, useState } from 'react'
import EventCard from '../../Components/Event/EventCard'
import { Link } from 'react-router-dom';
function AllPrograms() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const fetchEvent = () => {
            fetch('https://renderz-app.onrender.com/events/all')
                .then((res) => res.json())
                .then(data => {
                    console.log(data);
                    setEvents(data)
                })
        }
        fetchEvent()
        
    }, []);
    console.log('re-render...');
    return (
        <>
            <div className='px-32 py-16'>

                <div className='text-white p-5 rounded-[6px] text-left  bg-[#10163a]'>
                    <div className='gap-5 grid-cols-5 grid p-[16px] auto-rows-[minmax(90px, auto)]'>
                        {events.map(event => {
                            return (
                                <Link to={`${event.event_slug}`} className='hover:no-underline'>
                                    <EventCard data={event} />
                                </Link>
                            )
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}

export default AllPrograms