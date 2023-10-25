import React, { useState, useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import avatar from '../../resource/img/logo2_200.png';
import LockOutlined from '@mui/icons-material/LockOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
// import Search from '../../Components/Search/Search';
import { useDispatch } from 'react-redux';
import { updateAvatar } from '../../feature/user/userSlice';
import PlayerCard from '../../Components/Players/PlayerCard';
import SearchAvatar from '../../Components/Search/SearchAvatar';

// import theme from '../../Components/theme/theme';
function UserProfile() {
    const dispatch = useDispatch()
    // const [myCards, setMyCards] = useState([]);

    // dispatch(userCard)
    // const myCards = useSelector(userCards)
    // console.log(myCards);

    const [myCards, setMyCards] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:8888/me/my-cards', {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json',
                },
                'body': JSON.stringify({ createdBy: user._id })
            })
            const jsonData = await res.json();
            if (res.status < 200 || res.status >= 300) {
                return console.log(jsonData);
            }
            console.log(jsonData);
            setMyCards(jsonData);
        }

        fetchData();
    }, []);
    const user = useLoaderData();
    // console.log(user);
    const handleUpdateAvatar = (playerImg) => {
        dispatch(updateAvatar({ ...user, userAvatar: playerImg }))
        window.location.reload()
    }
    return (
        <div className='px-32 py-16'>
            <div className='text-left text-white p-5 rounded-[6px] bg-[#10163a] w-full'>
                <h2 className='pb-2' style={{ borderBottom: '2px solid #414561' }}>User Profile</h2>
                <div>
                    <div className='border border-solid border-[#414561] w-full flex flex-row  p-3 '>
                        <div className='user-avatar  w-1/4 py-2 pe-3 flex items-start justify-center' style={{ borderRight: '2px solid #414561' }}>
                            <div className='w-full flex justify-center flex-col '>
                                {/* <img src={user.userAvatar ? user.userAvatar : avatar} className='rounded-full border border-solid border-[#414561] mx-auto' height={128} alt=""></img> */}
                                <div className='flex w-full justify-center items-center'>
                                    <div className='h-[128px] w-[128px] rounded-full border border-solid border-[#414561] bg-cover' style={{ backgroundImage: `url('${user.userAvatar ? user.userAvatar : avatar}')` }}>

                                    </div>
                                </div>
                                <div className='w-full' style={{ borderBottom: '2px solid #414561' }}>
                                    <h3 className='text-white text-center' >{user.username}</h3>
                                </div>

                                <div className={`update-avatar-btn text-white py-3 w-full bg-[#5b53c4] mt-2 rounded-md flex flex-row justify-center items-center hover:cursor-pointer hover:bg-[#4c0ef6]`}>
                                    <SearchAvatar
                                        triggerModalButton={
                                            <div className='flex flex-row'>
                                                <DriveFileRenameOutlineIcon className='text-white me-2' fontSize='20'></DriveFileRenameOutlineIcon>
                                                <p className='text-center m-0'>Update Avatar</p>
                                            </div>
                                        }
                                        onItemClick={handleUpdateAvatar}
                                    />

                                </div>
                                <Link to='/reset-password' className='update-avatar-btn border border-solid text-[#ff9e42] border-[#ff9e42] py-3 w-full hover:cursor-pointer hover:text-white hover:bg-[#ff9e42] hover:no-underline mt-2 rounded-md flex flex-row items-center justify-center'>
                                    <LockOutlined className='me-2' fontSize='20'></LockOutlined>
                                    <p className='text-center m-0'>Change Password</p>
                                </Link>
                            </div>
                        </div>
                        <div className='w-3/4  px-3'>
                            <h3 className='m-2 pb-3' style={{ borderBottom: '2px solid #414561' }}>Your cards</h3>
                            <div className='m-2 py-2 w-full max-h-[600px] flex overflow-y-scroll flex-wrap gap-5'>
                                {myCards.map((c, index) => {
                                    return (
                                        <div key={index} className=''>
                                            <PlayerCard data={c} border='true' />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}