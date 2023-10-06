import React from 'react'
import styled from 'styled-components'
import { Container } from '../PlayersList/PlayerList.style'
import futmobile_dc from '../../resource/img/futmobile_dc.png'
import theme from '../theme/theme'

const Divider = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    span{
        color:${theme.text.main};
        position:relative;
        padding-left: 12px;
        padding-right: 12px;
        font-size: .9375em;
    }

    margin-bottom: 16px;
`
export const Line = styled.span`
    background-color:${theme.text.main};
    border-top: 1px solid ${theme.primary.border};
    position: relative;
    width:100%;
    
`

const PartnerContainer = styled(Container)`
    justify-content: center;
`

export default function Partner() {
    return (
        <>
            <PartnerContainer>
                <Divider>
                    <Line></Line>
                    <span>Partners</span>
                    <Line></Line>
                </Divider>
                <img alt="" src={futmobile_dc}></img>
            </PartnerContainer>
        </>
    )
}
