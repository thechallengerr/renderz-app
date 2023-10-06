import React from 'react';
import {
  CardContainer, CardWrapper, CardImage,
  PlayerImage, NationImageSmall, EventImageSmall,
  PlayerPosition, PlayerRating, PlayerName,
  NationImageLarge, EventImageLarge, CardWrapperLarge,
  PlayerPositionLarge, PlayerRatingLarge, PlayerNameLarge
} from './PlayerCard.style'

export default function PlayerCard({ data, size, border, children, playerImageOnly }) {
  return (
    <>
      <CardContainer className={border ? 'border border-solid border-[#414561]' : ''}>
        {size === 'lg' ?
          <CardWrapperLarge className="card-wrapper" >
            <PlayerImage src={data.player_img} alt="" className="player-image"></PlayerImage>
            {!playerImageOnly && (
              <>
                <CardImage src={data.background} alt="" className="card-image"></CardImage>
                <NationImageLarge src={data.flag} alt="" className="nation-image"></NationImageLarge>
                <EventImageLarge src={data.event} className="event-image"></EventImageLarge>
                <PlayerPositionLarge className="player-position text-uppercase">{data.position}</PlayerPositionLarge>
                <PlayerRatingLarge className="player-rating ">{data.rating}</PlayerRatingLarge>
                <PlayerNameLarge className="player-name" style={{ transform: data.name && data.name.length > 12 ? 'scale(0.653266, 1)' : 'scale(0.890411, 1)' }}>{data.name}</PlayerNameLarge>
              </>
            )}

          </CardWrapperLarge>
          : (
            <CardWrapper>
              <PlayerImage src={data.player_img} alt="" className="player-image"></PlayerImage>
              {!playerImageOnly && (
                <>
                  <CardImage src={data.background} alt="" className="card-image"></CardImage>
                  <NationImageSmall src={data.flag} alt="" className="nation-image"></NationImageSmall>
                  <EventImageSmall src={data.event} className="event-image"></EventImageSmall>
                  <PlayerPosition className="player-position text-uppercase">{data.position}</PlayerPosition>
                  <PlayerRating className="player-rating ">{data.rating}</PlayerRating>
                  <PlayerName className="player-name" style={{ transform: data.name && data.name.length > 12 ? 'scale(0.653266, 1)' : 'scale(0.890411, 1)' }}>{data.name}</PlayerName>
                </>
              )}
            </CardWrapper>
          )}
        {children}
      </CardContainer>
    </>
  )
}

//{{#if (isTooLong this.name)}} transform: scale(0.653266, 1); {{else}}transform: scale(0.890411, 1);{{/if}}