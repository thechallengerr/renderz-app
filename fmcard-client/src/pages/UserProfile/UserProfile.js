import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import avatar from '../../resource/img/logo2_200.png';
import LockOutlined from '@mui/icons-material/LockOutlined';
import CloseIcon from '@mui/icons-material/Close';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
// import Search from '../../Components/Search/Search';
import { updateAvatar } from '../../feature/user/userSlice';
import PlayerCard from '../../Components/Players/PlayerCard';
import SearchAvatar from '../../Components/Search/SearchAvatar';
import DeleteCardModal from '../../Components/Modal/DeleteCardModal';
import { getCard, myCards } from '../../feature/card-generator/cardSlice';
import useWindowDimensions from '../../hook/useDimension';
import { useDispatch, useSelector } from 'react-redux';

// import theme from '../../Components/theme/theme';
function UserProfile() {
    const { width } = useWindowDimensions()
    const cards = useSelector(myCards)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            dispatch(getCard())
        }

        fetchData();
    }, []);
    // const [showCardActions, setshowCardActions] = useState(false);
    const user = useLoaderData();
    // console.log(user);
    const handleUpdateAvatar = (playerImg) => {
        dispatch(updateAvatar({ _id: user._id, userAvatar: playerImg }))
        window.location.reload()
    }

    // const handleDeleteCard = (id) => {

    // }
    return (
        <div className='text-white xl:px-32 lg:px-20 md:px-12 px-4 py-16 '>
            <div className='text-left text-white p-5 rounded-[6px] bg-[#10163a] w-full'>
                <h2 className='pb-2' style={{ borderBottom: '2px solid #414561' }}>User Profile</h2>
                <div>
                    <div className='border border-solid border-[#414561] w-full flex md:flex-row flex-col  p-3 '>
                        <div className='user-avatar  md:w-1/4 w-full py-2 pe-3 flex items-start justify-center box-border'
                            style={{
                                borderRight: width <= 600 ? '' : '2px solid #414561',

                            }}>
                            <div className='w-full flex justify-center md:flex-col flex-row '>
                                {/* <img src={user.userAvatar ? user.userAvatar : avatar} className='rounded-full border border-solid border-[#414561] mx-auto' height={128} alt=""></img> */}
                                <div
                                    className='flex w-full justify-center items-center flex-col'
                                    style={{}}
                                >
                                    <div className='lg:h-[128px] lg:w-[128px] lg:bg-[length:164px_164px]  lg:[background-position-x:-36px]
                                                    md:h-[80px] md:w-[80px] md:bg-[length:128px_128px] md:[background-position-x:-36px]
                                                    h-[80px] w-[80px] bg-[length:128px_128px] [background-position-x:-36px]
                                                    bg-no-repeat rounded-full border border-solid border-[#414561]  '
                                        style={{
                                            backgroundImage: `url('${user.userAvatar ? user.userAvatar : avatar}')`,


                                        }}>

                                    </div>
                                    <div className='w-full' style={{ borderBottom: width <= 600 ? '' : '2px solid #414561' }}>
                                        <h3 className='text-white text-center' >{user.username}</h3>
                                    </div>
                                </div>
                                <div className='w-full  flex-col flex items-center justify-center'>

                                    <div className={`update-avatar-btn text-white py-3 w-full bg-[#5b53c4] mt-2 rounded-md flex flex-row justify-center items-center hover:cursor-pointer hover:bg-[#4c0ef6]`}>
                                        <SearchAvatar
                                            triggerModalButton={
                                                <div className='flex flex-row items-center'>
                                                    <DriveFileRenameOutlineIcon className='text-white me-2' fontSize='20'></DriveFileRenameOutlineIcon>
                                                    <p className='text-center m-0 text-[10px] xs:text-[14px] lg:text-[18px]'>Update Avatar</p>
                                                </div>
                                            }
                                            onItemClick={handleUpdateAvatar}
                                        />

                                    </div>
                                    <Link to='/reset-password' className='update-avatar-btn border border-solid text-[#ff9e42] border-[#ff9e42] py-3 w-full hover:cursor-pointer hover:text-white hover:bg-[#ff9e42] hover:no-underline mt-2 rounded-md flex flex-row items-center justify-center'>
                                        <LockOutlined className='me-2' fontSize='20'></LockOutlined>
                                        <p className='text-center m-0 text-[10px] xs:text-[14px] lg:text-[18px]'>Change Password</p>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className='md:w-3/4 w-full px-3'>
                            <h3 className='m-2 pb-3' style={{ borderBottom: '2px solid #414561' }}>My card collection</h3>
                            <div className='m-2 py-2 w-full max-h-[600px] flex overflow-y-scroll flex-wrap gap-5 '>

                                {cards.map((c, index) => {
                                    return (
                                        <div
                                            key={index} className='relative'>
                                            {/* {showCardActions && <CardActions cardId={c._id} />} */}
                                            <DeleteCardModal
                                                triggerOpenModalButton={
                                                    <>
                                                        <div className=' flex items-center justify-center '>
                                                            <CloseIcon fontSize={'12px'} />
                                                        </div>
                                                    </>
                                                }
                                                cardId={c._id}
                                            />
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

export const CardActions = ({ cardId, show }) => {
    // const [show, setShow] = useState(false);
    return (
        <>
            {show &&

                <div
                    className='absolute z-10 w-full flex flex-col items-center justify-center left-0 right-0 top-0 bottom-0 bg-[rgba(16,22,58,.4)]'

                >
                    <a
                        href={`card-generator/${cardId}`}
                        className='py-2 px-4 my-2 cursor-pointer rounded-[3px] flex items-center text-white no-underline'
                        style={{
                            background: 'linear-gradient(118deg,rgba(115,103,240,1),rgba(115,103,240,.7))!important',
                            boxShadow: '0 0 6px 1px rgba(115,103,240,.6)'
                        }}
                    // onClick={onEditClick}
                    >
                        Edit
                    </a>

                </div>
            }
        </>
    )
}