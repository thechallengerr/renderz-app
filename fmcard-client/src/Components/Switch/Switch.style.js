import theme from "../theme/theme";
import styled from "styled-components";


export const Slider = styled.div`
     position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 36px;

    &:before{
        border-radius: 50%;
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }
    &:after{
        content: "";
    }
`
export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${Slider}{
        background-color: ${theme.primary.active};
    }
    &:checked + ${Slider}:before{
        -webkit-transform: translateX(24px);
        -ms-transform: translateX(24px);
        transform: translateX(24px);
    }
    &:focus + ${Slider}{
        box-shadow: 0 0 1px ${theme.primary.active};
    }
`
export const SwitchWrapper = styled.label`
        position: relative;
        display: inline-block;
        width: 48px;
        height: 24px;
    `