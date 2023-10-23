import theme from '../theme/theme';
import styled from 'styled-components';

export const Under = styled.div`
    box-sizing: border-box;
    display:flex;
    align-items: center;
    justify-content:center;
    background-color:${theme.primary.main};
    padding:8px;
`
export const Page = styled.div`
    color :${theme.text.main};
    display: flex;
    align-items: center;
    min-width:120px;
    margin-right:8px;
    padding:8px 16px;
    transition: ease-in-out 0.2s;
    border-radius: 4px;
    cursor: pointer;
    ${({ active }) =>
        active &&
        `
        cursor:pointer;
        border-radius:3px;
        background:linear-gradient(118deg,rgba(115,103,240,1),rgba(115,103,240,.7))!important;;
        box-shadow: 0 0 6px 1px rgba(115,103,240,.6);
        color:#fff!important;
    `
    }
    &:hover{
        background: #262c49;
        a{
            text-decoration:none;
        }
    }
    a{
        text-decoration:none;
    }
`