import React from 'react'
import { Container, BlackBar, BlurBackground, EventWrapper, EventImage, WrapperBody } from './EventCard.style'
export default function EventCard({ data }) {
    return (
        <>
            <Container className='card-border'>
                <BlurBackground image={data.event_thumb}></BlurBackground>
                <EventWrapper>
                    <WrapperBody>
                        <EventImage >
                            <img
                                alt="" src={data.event_thumb}
                                className='md:h-[75px] h-[49px]'
                            ></img>
                        </EventImage>
                        <BlackBar>
                            <span className='event-name md:text-[22px] text-[12px]'>{data.event_shortname}</span>
                        </BlackBar>
                    </WrapperBody>

                </EventWrapper>
            </Container>
        </>
    )
}
