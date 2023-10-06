import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import theme from '../theme/theme';
import { IconButton } from '@mui/material';
import PlayerOnSearch from '../PlayerOnSearch/PlayerOnSearch';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    // bgcolor: theme.primary.light,
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 2,
    // px: 2,
    // pt: 4,
    // pb: 2,
};

export default function Search({ triggerModalButton }) {
    const [open, setOpen] = React.useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [searchError, setSearchError] = useState('');
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    useEffect(() => {
        const handleSearch = () => {

            if (playerName === '') {
                return;
            }
            let match = /^[a-zA-Z]*/.test(playerName)
            let match2 = /\s*/.test(playerName)
            if (match2) {
                setSearchError('Wrong input');
            }
            if (match) {
                fetch('http://localhost:8888/players/search', {
                    'method': 'POST',
                    'mode': 'cors',
                    'headers': {
                        'Content-Type': 'application/json',
                    },
                    'body': JSON.stringify({ player_name: playerName })
                })
                    .then(res => res.json())
                    .then(players => {
                        // searchResult.innerHTML = '';
                        if (players.length < 1) {
                            setSearchError('No players match');
                            return;
                        }
                        setSearchResult([...players])
                    })
                    .catch((err) => {
                        throw new Error(err)
                    })
            }
        }
        handleSearch()
    }, [playerName]);
    // console.log(searchResult);

    return (
        <div className='search flex'>
            <div onClick={handleOpen} className='flex items-center'>
                {triggerModalButton}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className={`relative w-full text-[${theme.text.main}] bg-[${theme.primary.light}] px-2 pt-[48px] pb-2 rounded-[6px]`} >
                            <div className={`absolute top-2 right-2 hover:cursor-pointer hover:bg-[#262c49] p-1`} onClick={handleClose}>
                                <CloseIcon ></CloseIcon>
                            </div>
                            <div className=' p-3  rounded-[6px] text-left  bg-[#10163a]'>
                                <input
                                    className={`w-full p-2 rounded bg-inherit border border-solid border-[${theme.primary.border}] outline-none text-[${theme.text.main}]`}
                                    type='text'
                                    placeholder='Search player'
                                    value={playerName}
                                    onChange={(e) => setPlayerName(e.target.value)}
                                >

                                </input>
                                <div className={`w-full p-2 mt-3 rounded bg-inherit border border-solid border-[${theme.primary.border}] h-[300px] overflow-y-scroll`}>
                                    {
                                        searchResult.map((item, index) => {
                                            console.log(item);
                                            return (
                                                <div onClick={handleClose}>
                                                    <PlayerOnSearch player={item} key={index} link={true} />
                                                </div>
                                            )
                                        })
                                    }
                                    {/* <span className={`text-[${theme.text.main}]`}>{searchError}</span> */}
                                </div>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
