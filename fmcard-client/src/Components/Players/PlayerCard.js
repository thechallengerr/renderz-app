import React from 'react';
import {
  CardContainer, CardWrapper, CardImage,
  PlayerImage, NationImageSmall, EventImageSmall, NationImage, EventImage,
  PlayerPosition, PlayerRating, PlayerName,
  NationImageLarge, EventImageLarge, CardWrapperLarge,
  PlayerPositionLarge, PlayerRatingLarge, PlayerNameLarge, CardWrapperSmall,
  PlayerPositionSmall, PlayerNameSmall, PlayerRatingSmall,
} from './PlayerCard.style'
import useWindowDimensions from '../../hook/useDimension';
export default function PlayerCard({ data, size, border, children, playerImageOnly }) {
  const { width } = useWindowDimensions();
  const responsiveSize = (w) => {
    switch (true) {
      case w < 500:
        console.log('sm');
        return 'sm'
      case w >= 500 && w <= 1280:
        console.log('md');
        return ''
      default:
        return '';
    }
  }
  const switchSize = (cardSize) => {
    switch (cardSize) {
      case 'lg':
        return (
          <CardWrapperLarge className="card-wrapper" >
            <PlayerImage src={data.player_img} alt="" className="player-image"></PlayerImage>
            {!playerImageOnly && (
              <>
                <CardImage src={data.background} alt="" className="card-image" ></CardImage>
                <NationImageLarge src={data.flag} alt="" className="nation-image" ></NationImageLarge>
                <EventImageLarge src={data.event || data.club} className="event-image" ></EventImageLarge>
                <PlayerPositionLarge className="player-position text-uppercase">{data.position}</PlayerPositionLarge>
                <PlayerRatingLarge className="player-rating ">{data.rating}</PlayerRatingLarge>
                <PlayerNameLarge className="player-name" style={{ transform: (data.name || data.player_name) && (data.name || data.player_name).length > 12 ? 'scale(0.653266, 1)' : 'scale(0.890411, 1)' }}>{(data.name || data.player_name)}</PlayerNameLarge>
              </>
            )}

          </CardWrapperLarge>
        )
      case 'sm':
        return (
          <CardWrapperSmall className="card-wrapper" >
            <PlayerImage src={data.player_img} alt="" className="player-image"></PlayerImage>
            {!playerImageOnly && (
              <>
                <CardImage src={data.background} alt="" className="card-image" ></CardImage>
                <NationImageSmall src={data.flag} alt="" className="nation-image" ></NationImageSmall>
                <EventImageSmall src={data.event || data.club} className="event-image" ></EventImageSmall>
                <PlayerPositionSmall className="player-position text-uppercase">{data.position}</PlayerPositionSmall>
                <PlayerRatingSmall className="player-rating ">{data.rating}</PlayerRatingSmall>
                <PlayerNameSmall className="player-name" style={{ transform: (data.name || data.player_name) && (data.name || data.player_name).length > 12 ? 'scale(0.653266, 1)' : 'scale(0.890411, 1)' }}>{(data.name || data.player_name)}</PlayerNameSmall>
              </>
            )}

          </CardWrapperSmall>
        )

      default:
        return (
          <CardWrapper>
            <PlayerImage src={data.player_img} alt="" className="player-image"></PlayerImage>
            {!playerImageOnly && (
              <>
                <CardImage src={data.background} alt="" className="card-image"></CardImage>
                <NationImage src={data.flag} alt="" className="nation-image"></NationImage>
                <EventImage src={data.event || data.club || data.club_img} className="event-image"></EventImage>
                <PlayerPosition className="player-position text-uppercase">{data.position}</PlayerPosition>
                <PlayerRating className="player-rating ">{data.rating}</PlayerRating>
                <PlayerName className="player-name" style={{ transform: (data.name || data.player_name) && (data.name || data.player_name).length > 12 ? 'scale(0.653266, 1)' : 'scale(0.890411, 1)' }}>{(data.name || data.player_name)}</PlayerName>
              </>
            )}
          </CardWrapper>
        )
    }
  }
  return (
    <>
      <CardContainer
        className='max-w-1/2 md:max-w-1/3 p-1 md:p-3 '
        style={{
          border: border ? '1px solid #414561' : ''
        }}
      >

        {

          switchSize(size ? size : responsiveSize(width))
        }
        {children}
      </CardContainer>
    </>
  )
}
