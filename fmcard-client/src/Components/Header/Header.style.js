import styled from 'styled-components'
import theme from '../theme/theme'
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';




export const Wrapper = styled.div`
    background-color:${theme.primary.main};
    color:${theme.text.contrastText};
    padding:0 32px;
    position:sticky;
    top:0;
    z-index:999;
`
export const Upper = styled.div`
    display:flex;
    align-items:center;
    
    padding:12px 0;
    
    color:${theme.text.contrastText};
`

export const StyledTwitterIcon = styled(TwitterIcon)`
    color:#1da1f2;
`
export const StyledSearchIcon = styled(SearchIcon)`
    color:${theme.text.main};
    
`
export const StyledIconButton = styled(IconButton)`
    &:hover {
        color:#fff;
    }
`

export const Logo = styled.a`
    display:flex;
    align-items:center;
    position: absolute;
    left : 50%;
    transform:translateX(-50%);
    color:${theme.text.contrastText};
    &:hover{
        text-decoration: none;
    }
    
`

export const LogoText = styled.span`
    &&{
        text-transform:uppercase;
        font-weight:700;
        font-size:28px;
    }
`
export const ButtonLogin = styled.div`
    padding:8px 12px;
    border-radius:4px;
    cursor:pointer;
    transition: linear 0.2s;
    &:active{
        background:linear-gradient(118deg,rgba(115,103,240,1),rgba(115,103,240,.7))!important;;
        box-shadow: 0 0 6px 1px rgba(115,103,240,.6)
        a {
            color: #fff;
        }
    }
    `

