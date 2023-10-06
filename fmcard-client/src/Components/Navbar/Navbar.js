import React, { useState } from 'react'
import { Page, Under } from './Navbar.style'
// import { Link } from 'react-router-dom';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const pages = ['Home', 'Players', 'Programs', 'Card Generator']
    const pageIcons = [
        <HomeOutlinedIcon></HomeOutlinedIcon>,
        <PeopleAltOutlinedIcon ></PeopleAltOutlinedIcon>,
        <ViewInArOutlinedIcon></ViewInArOutlinedIcon>,
        <StyleOutlinedIcon></StyleOutlinedIcon>
    ]
    const [active, setActive] = useState(pages[0]);
    return (
        <>
            <Under>
                {
                    pages.map((page,index) => {
                        return (
                            <Page
                            key={page}
                            onClick={() => setActive(page)}
                            active={active === page}
                        >
                                <Link
                                    to={'/' + page.toLowerCase().replace(' ', '-')}
                                    className='text-none text-[#c2c6dc] flex items-center justify-center font-normal'
                                >
                                {pageIcons[index]}
                                <span className='page ml-2'>{page}</span>
                            </Link>
                        </Page>
                        )
                    })
                }

            </Under>
        </>
    )
}
