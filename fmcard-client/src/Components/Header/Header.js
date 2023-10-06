import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import {
    Wrapper, Upper, StyledTwitterIcon,
    Logo, LogoText,
        ButtonLogin
} from './Header.style';
import logo200 from '../../resource/img/logo200.png';
import Navbar from '../Navbar/Navbar';
import CurrentUser from '../CurrentUser/CurrentUser';
import Search from '../Search/Search';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet } from 'react-router-dom';

export default function Header() {
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem('user')));
        setCurrentUser(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {})
    }, []);
    const isAuth = Object.getOwnPropertyNames(currentUser).length > 0
    console.log(isAuth);
    return (
        <React.Fragment>
            <Wrapper className='header'>
                <Upper className='upperHeader'>
                    <IconButton>
                        <StyledTwitterIcon></StyledTwitterIcon>
                    </IconButton>
                    <Logo href='/'>
                        <LogoText className='logoText'>FIFA</LogoText>
                        <img src={logo200} alt='Fifarenderz' height={48}></img>
                        <LogoText className='logoText'>ENDERZ</LogoText>
                    </Logo>
                    <div className='flex flex-row w-1/4 justify-end'>
                        <Search
                        triggerModalButton={<SearchIcon className='text-[#c2c6dc]'></SearchIcon>}
                        />
                        {isAuth ?
                            (<CurrentUser currentUser={currentUser} setCurrentUser={setCurrentUser} />) :
                            (<ButtonLogin className='hover:bg-[#5b53c4] '>
                                <Link className='hover:no-underline hover:text-[#fff] text-[#c2c6dc] flex items-center justify-center font-normal' to='/login'>
                                    Log In/ Register
                                </Link>
                            </ButtonLogin>)}
                    </div>
                </Upper>

            </Wrapper>
            <Navbar />
            <Outlet />
        </React.Fragment>
    )
}
