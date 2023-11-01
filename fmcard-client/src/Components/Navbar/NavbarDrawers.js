import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { pageIcons } from './Navbar';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import InputIcon from '@mui/icons-material/Input';
import { setCurrentUser, currentUser } from '../../feature/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import logo200 from "../../resource/img/logo200.png";
import { useNavigate } from 'react-router-dom';
const NavbarDrawers = ({ isAuth, toggleDrawer, open, triggerButton }) => {
    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
    const dispatch = useDispatch()

    const user = useSelector(currentUser);
    console.log(user);
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(setCurrentUser(null))
        toggleDrawer(false)
        navigate('/')
    }
    const list = () => (
        <Box
            sx={{
                backgroundColor: '#10163a',
                height: '100vh',

            }}
            role="presentation"

            onKeyDown={toggleDrawer(false)}
        >
            <div className='flex items-center justify-between w-full pl-8 py-2'>
                <div className='flex items-center w-1/2 justify-center text-[#c2c6dc] hover:cursor-pointer'>
                    <div className='flex w-full justify-center items-center mr-2'>
                        <div className='h-[36px] w-[36px] rounded-full border border-solid border-[#414561]'
                            style={{
                                backgroundImage: `url('${user ? user.userAvatar : logo200}')`,
                                backgroundPositionX: '-12px',
                                backgroundSize: 48

                            }}>

                        </div>
                    </div>
                    <span className='text-none lowercase'>{user?.username}</span>
                </div>
                <div
                    className='flex items-center justify-end py-3 px-3 cursor-pointer'
                    onClick={toggleDrawer(false)}
                >
                    <CloseIcon style={{ color: '#c2c6dc' }}></CloseIcon>
                </div>
            </div>
            <List>
                {['home', 'players', 'programs', 'card-generator'].map((page, index) => (
                    <Link
                        to={page}
                        className='hover:no-underline  text-[#c2c6dc] flex items-center justify-center font-normal mx-6'
                        key={page}
                        onClick={toggleDrawer(false)}
                    >
                        <ListItem key={page} disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{ color: '#c2c6dc' }}>
                                    {pageIcons[index]}
                                </ListItemIcon>
                                <ListItemText primary={toTitleCase(page)} />
                            </ListItemButton>
                        </ListItem>

                    </Link>
                ))}
            </List>
            <Divider light={true} />
            <List>
                {user ?


                    <>
                        <Link
                            className='hover:no-underline  text-[#c2c6dc] flex items-center justify-center font-normal mx-6'
                            to='user/profile'
                            onClick={toggleDrawer(false)}
                        >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AccountBoxIcon className='text-[#c2c6dc]' />

                                    </ListItemIcon>
                                    <ListItemText primary='Profile' />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <div
                            className='hover:no-underline  text-[#c2c6dc] flex items-center justify-center font-normal mx-6'
                            onClick={() => handleLogout()}
                        >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>

                                        <LogoutIcon className='text-[#c2c6dc]' />
                                    </ListItemIcon>
                                    <ListItemText primary={'Logout'} />
                                </ListItemButton>
                            </ListItem>
                        </div>
                    </>
                    :
                    <>
                        <Link
                            className='hover:no-underline  text-[#c2c6dc] flex items-center justify-center font-normal mx-6'
                            to='login'
                            onClick={toggleDrawer(false)}

                        >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InputIcon className='text-[#c2c6dc]'></InputIcon>
                                    </ListItemIcon>
                                    <ListItemText primary='Login' />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </>
                }
            </List>
        </Box>
    );

    return (
        <div className='block lg:hidden relative w-8'>
            <button
                onClick={toggleDrawer(true)}
                className=' text-[#c2c6dc] cursor-pointer bg-[#10163a] shadow-none outline-none p-0 border-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ' >
                <MenuIcon ></MenuIcon>
            </button>
            <Drawer
                anchor={'left'}
                open={open}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );
}

export default NavbarDrawers