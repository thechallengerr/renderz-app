import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Container, LastestPlayers } from '../PlayersList/PlayerList.style';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
const LastestEvents = styled(LastestPlayers)`
  grid-template-columns: repeat(5, 1fr);
`
const EventsContainer = styled(Container)`
    justify-content:center;
`

export default function EventList() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8888/events?noOfEvents=5').then(res => res.json()).then((result) => {
            // console.log(result);
            setEvents([...result])
        }).catch(err => console.log(err))
        return () => {

        };
    }, []);
    return (
        <>
            <EventsContainer>
                <div style={{ width: '100%' }}>
                    <h3 style={{ margin: '4px', fontWeight: '400', fontFamily: 'DINProCondBold', }}>Lastest Programs <a href='/programs' style={{ fontSize: '14px' }}>(see all...)</a></h3>
                    <LastestEvents>
                        {events && events.map((event, index) => {
                            return (
                                <Link to={`/programs/${event.event_slug}`} className='hover:no-underline'>
                                    <EventCard key={index} data={event} />
                                </Link>
                            )
                        })}
                    </LastestEvents>
                </div>
            </EventsContainer>

        </>
    )
}
