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
            <div
                className='flex-wrap border-box w-full md:px-8 px-2 py-4 flex items-center lg:justify-between  md:flex-col  relative justify-center'
                style={{ boxShadow: '0 4px 25px 0 rgba(0,0,0,.1)' }}    
            >
                <Divider>
                    <Line></Line>
                    <span>Partners</span>
                    <Line></Line>
                </Divider>
                <img alt="" src={futmobile_dc}></img>
            </div>
        </>
    )
}
