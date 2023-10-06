import theme from "../theme/theme";
import styled, { keyframes } from "styled-components";

const growDown = keyframes`

    from {
        transform: scaleY(0)
    }
    to {
        transform: scaleY(1)
}`

const scrollUp = keyframes`

    from {
        transform: scaleY(1)
    }
    to {
        transform: scaleY(0);
        display: none;
}`

export const DropdownList = styled.div`
    background-color: #262c49;
    height: 200px;
    overflow-y: scroll;
    width: 100%;
    padding-inline-end: 8px;
    animation: ${growDown} 300ms ease-in-out forwards;
    transform-origin: top center;
    display: none;
        /* width */
    &::-webkit-scrollbar {
    width: 12px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        background-color:'rgba(255,255,255,0.1)';
        border-radius: 6px;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: ${theme.primary.active}; 
        border-radius: 6px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #7367F0; 
    }
    &.hide{
        display: none!important; 
        animation:${scrollUp} .2s ease-out forwards ;
    }
    &.show{
        display: block;
    }
    
`

export const FilterWrapper = styled.div`
    .up{
        transition: all .2s linear;
        transform: rotate(0deg);

    }
    .down{
        transition: all .2s linear;
        transform: rotate(180deg);
    }
    
`