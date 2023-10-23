import React, { useState } from 'react'
import { Page, Under } from './Navbar.style'
// import { Link } from 'react-router-dom';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    const pages = ['home', 'players', 'programs', 'card-generator'];
    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
    const pageIcons = [
        <HomeOutlinedIcon></HomeOutlinedIcon>,
        <PeopleAltOutlinedIcon ></PeopleAltOutlinedIcon>,
        <ViewInArOutlinedIcon></ViewInArOutlinedIcon>,
        <StyleOutlinedIcon></StyleOutlinedIcon>
    ]
    const [active, setActive] = useState(pages[0]);
    const location = useLocation();
    console.log(active);
    console.log(location.pathname.split('/')[1]);
    return (
        <>
            <Under>
                {
                    pages.map((page, index) => {
                        return (
                            <Link
                                to={page}
                                className='hover:no-underline  text-[#c2c6dc] flex items-center justify-center font-normal mx-6'
                                key={page}
                            >
                                <Page
                                    onClick={() => setActive(page)}
                                    active={page === location.pathname.split('/')[1]}
                                    className='hover:text-white'
                                >
                                    {pageIcons[index]}
                                    <span className='page ml-2'>{toTitleCase(page.replace('-', ' '))}</span>
                                </Page>
                            </Link>
                        )
                    })
                }

            </Under>
        </>
    )
}
