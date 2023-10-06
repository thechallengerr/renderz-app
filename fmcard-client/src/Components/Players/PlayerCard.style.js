import styled from "styled-components"

export const PlayerImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left:0;
  z-index: 1;
  
`

export const EventImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left:0;
  width: 38px;
  height: 38px;
  position: absolute;
  top: 37%;
  left: 23%;
`
export const EventImageSmall = styled(EventImage)`
  width: 19px;
  height: 19px;
`
export const EventImageLarge = styled(EventImage)`
  width: 38px;
  height: 38px;
`

export const NationImage = styled.img`
  width: 30.1px;
  height: 18px;
  position: absolute;
  top: 55%;
  left: 24.5%;
`
export const NationImageSmall = styled(NationImage)`
  width: 15.05px;
  height: 9px;
`
export const NationImageLarge = styled(NationImage)`
  width: 30.1px;
  height: 18px;
`
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left:0;
`
export const PlayerName = styled.span`
  font-family:'Posterama';
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  width: 100%;
  top: 68%;
  left: 0;
  white-space: nowrap;
 
`
export const PlayerNameLarge = styled(PlayerName)`
  font-size: 20px;
`

export const PlayerPosition = styled.span`
  text-align: center;
  font-family:'Posterama';
  color: #fff;
  position: absolute;
  text-transform: uppercase;
  font-size: 8.5px;
  top: 26%;
  left: 21%;
  width: 19.5%;
`
export const PlayerPositionLarge = styled(PlayerPosition)`
  font-size: 17px;
`
export const PlayerRating = styled.span`
  font-family:'DINProCondBold';
  text-align: center;
  color: #fff;
  position: absolute;
  text-transform: uppercase;
  font-size: 25px;
  top: 6%;
  left: 23%;
  z-index: 2;
`
export const PlayerRatingLarge = styled(PlayerRating)`
  font-size: 50px;
`


export const CardWrapper = styled.div`
  width: 128px;
  height: 128px;
  position: relative;
  line-height: 1.2;
  margin: auto;
  span {
    position: absolute;
    color: #fff;
  }
`
export const CardWrapperLarge = styled(CardWrapper)`
    width: 256px;
    height: 256px;
`
export const CardWrapperSmall = styled(CardWrapper)`
    width: 128px;
    height: 128px;
    line-height: 1.2;
`

export const CardContainer = styled.div`
  border: ${props => props.border};
  border-radius: 6px;
  padding: 12px;
  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    transition : all 0.2 ease-in-out;
  } 
`