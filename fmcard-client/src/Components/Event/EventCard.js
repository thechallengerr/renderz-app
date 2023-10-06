import React from 'react'
import {Container,BlackBar,BlurBackground, EventWrapper, EventImage,WrapperBody} from './EventCard.style'
export default function EventCard({ data }) {
    return (
        <>
            <Container className='card-border'>
                <BlurBackground image={data.event_thumb}></BlurBackground>
                <EventWrapper>
                    <WrapperBody>
                        <EventImage >
                            <img alt="" height={75} src={data.event_thumb}></img>
                        </EventImage>
                        <BlackBar>
                            <span className='event-name'>{data.event_shortname}</span>
                        </BlackBar>
                    </WrapperBody>

                </EventWrapper>
            </Container>
        </>
    )
}
