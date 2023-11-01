import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
    StyledTwitterIcon,
    LogoText,
    ButtonLogin
} from './Header.style';
import logo200 from '../../resource/img/logo200.png';
import Navbar from '../Navbar/Navbar';
import CurrentUser from '../CurrentUser/CurrentUser';
import Search from '../Search/Search';
import SearchIcon from '@mui/icons-material/Search';
import NavbarDrawers from '../Navbar/NavbarDrawers';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currentUser } from '../../feature/user/userSlice';
export default function Header() {
    // const [currentUser, setCurrentUser] = useState({});
    const [openDrawer, setOpenDrawer] = useState(false);
    const user = useSelector(currentUser)

    const isAuth = Boolean(user)
    console.log(isAuth);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenDrawer(open);
    };

    return (
        <React.Fragment>
            <div className='header bg-[#10163a] text-[#7367f0] xl:px-32 lg:px-20 md:px-12 px-4 sticky top-0 z-20 w-full max-w-full'>
                <div className='upperHeader flex items-center justify-between text-[#7367f0] py-3'>
                    <NavbarDrawers isAuth={isAuth} toggleDrawer={toggleDrawer} open={openDrawer} />

                    <div className='hidden lg:block' >
                        <StyledTwitterIcon ></StyledTwitterIcon>
                    </div>

                    <a href='/' className='absolute flex left-[50%] translate-x-[-50%] hover:no-underline items-center'>
                        <LogoText className='logoText hidden lg:block'>FIFA</LogoText>
                        <img src={logo200} alt='Fifarenderz' className='w-8 lg:w-12'></img>
                        <LogoText className='logoText hidden lg:block'>ENDERZ</LogoText>
                    </a>
                    <div className='flex flex-row w-1/4 justify-end '>
                        <Search
                            triggerModalButton={<SearchIcon className='text-[#c2c6dc]'></SearchIcon>}
                        />
                        {user ?
                            (<CurrentUser />) :
                            (<ButtonLogin className='hover:bg-[#5b53c4] lg:block hidden'>
                                <Link className='hover:no-underline hover:text-[#fff] text-[#c2c6dc] flex items-center justify-center font-normal' to='/login'>
                                    Log In/ Register
                                </Link>
                            </ButtonLogin>)}
                    </div>

                </div>

            </div>
            <Navbar />
            <Outlet />
        </React.Fragment>
    )
}
