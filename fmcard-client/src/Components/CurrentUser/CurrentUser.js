import React from 'react'
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import logo200 from '../../resource/img/logo200.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, currentUser } from '../../feature/user/userSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
function CurrentUser() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const navigate = useNavigate()
    const user = useSelector(currentUser);
    const dispatch = useDispatch();
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const handleLogout = (e) => {
        localStorage.removeItem('user');
        handleClose(e)
        navigate('/');
        dispatch(setCurrentUser(null))
    }
    const handleProfileClick = (e) => {
        handleClose(e);
        navigate('/user/profile')
    }
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <>
            <Stack direction="row" spacing={2}>

                <div className='lg:block hidden'>
                    <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <div className='flex items-center w-1/2 justify-center text-[#c2c6dc] hover:cursor-pointer lg:flex-row-reverse'>
                            <div className='flex w-full justify-center items-center lg:mr-2 md:ml-2'>
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
                    </Button>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                        >
                                            <MenuItem onClick={handleProfileClick}>
                                                <PersonOutlineIcon className='me-2'></PersonOutlineIcon>
                                                Profile
                                            </MenuItem>
                                            <MenuItem onClick={handleLogout}>
                                                <LogoutIcon className='me-2'></LogoutIcon>
                                                Logout
                                            </MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </Stack>
        </>
    )
}

export default CurrentUser