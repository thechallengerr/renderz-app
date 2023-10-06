import theme from "../theme/theme"
import styled from "styled-components"
export const User = styled.div`
    width: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:${theme.text.main};
    &:hover{
        cursor:pointer; 
    }
    span{
        text-transform:lowercase;
    }
`
export const UserAvatar = styled.img.attrs({
    $src: props => props.$src || './logo2_200.png',
})`
    width:36px;
    height:36px;
    border-radius:50%;
    margin-right:8px;
    border:1px solid ${theme.primary.border}
`