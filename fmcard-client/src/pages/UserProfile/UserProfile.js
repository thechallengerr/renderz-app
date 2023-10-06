import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import avatar from '../../resource/img/logo2_200.png';
import LockOutlined from '@mui/icons-material/LockOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Search from '../../Components/Search/Search';

// import theme from '../../Components/theme/theme';
function UserProfile() {
    const user = useLoaderData()
    return (
        <div className='px-32 py-16'>
            <div className='text-left text-white p-5 rounded-[6px] bg-[#10163a] w-full'>
                <h2 className='pb-2' style={{ borderBottom: '2px solid #414561' }}>User Profile</h2>
                <div>
                    <div className='border border-solid border-[#414561] w-full flex flex-row  p-3 '>
                        <div className='user-avatar  w-1/4 py-2 pe-3 flex items-center justify-center flex-col' style={{ borderRight: '2px solid #414561' }}>
                            <img src={avatar} className='rounded-full border border-solid border-[#414561]' height={128} alt=""></img>
                            <div className='w-full' style={{ borderBottom: '2px solid #414561' }}>
                                <h3 className='text-white text-center' >{user.username}</h3>
                            </div>

                            <div className={`update-avatar-btn text-white py-3 w-full bg-[#5b53c4] mt-2 rounded-md flex flex-row justify-center items-center hover:cursor-pointer hover:bg-[#4c0ef6]`}>
                                <Search
                                    triggerModalButton={
                                        <div className='flex flex-row'>
                                            <DriveFileRenameOutlineIcon className='text-white me-2' fontSize='20'></DriveFileRenameOutlineIcon>
                                            <p className='text-center m-0'>Update Avatar</p>
                                        </div>
                                    }
                                />

                            </div>
                            <Link to='/reset-password' className='update-avatar-btn border border-solid text-[#ff9e42] border-[#ff9e42] py-3 w-full hover:cursor-pointer hover:text-white hover:bg-[#ff9e42] hover:no-underline mt-2 rounded-md flex flex-row items-center justify-center'>
                                <LockOutlined className='me-2' fontSize='20'></LockOutlined>
                                <p className='text-center m-0'>Change Password</p>
                            </Link>
                        </div>
                        <div className='w-3/4'>
                            <h3 className='m-2'>Your cards</h3>
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