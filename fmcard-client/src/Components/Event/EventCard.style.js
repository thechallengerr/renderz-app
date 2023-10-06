import styled from 'styled-components'
export const Container = styled.div`
    width:100%;
    position:relative;
    overflow:hidden;
    &:hover {
        cursor: pointer;
        transform: scale(1.04);
        transition : all 0.2 linear;
        text-decoration:none!important;
    }
`

export const EventImage = styled.div`
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const BlackBar = styled.div`
    height: 30%;
    width: 100%;
    padding: 8px 0;
    background-color: rgba(26,33,64,1);
    border-radius: 0 0 6px 6px;
    box-shadow: 0 0 20px 0 #1a2140;
    .event-name {
        /* position: absolute; */
        color: #fff!important;
        font-weight: 700;
        font-size:22px;
        font-family: 'DINProCondBold';
        text-align: center;
        text-transform: uppercase;
        text-decoration: none!important;
        margin: 0;
    }
`
export const EventWrapper = styled.div`
    width: 100%;
    z-index: 2;
    text-align: center;
`

export const WrapperBody = styled.div`
    border: 1px solid #414561;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    position: relative;
`

export const BlurBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    /* Add the blur effect */
    filter: blur(8px);
    -webkit-filter: blur(8px);

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: ${props => `url(${props.image})`}
`