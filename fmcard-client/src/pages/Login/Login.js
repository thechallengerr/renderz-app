import React from 'react'
import {
  LoginPage, LoginWrapper, Left, Right,
  LoginForm, InputGroup, LoginButton,
  SignUpButton, BackButton
} from './Login.style';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../feature/user/userSlice';
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({ mode: 'all' })
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const onSubmit = (data, event) => {
    event.preventDefault();

    axios.post('https://renderz-app.onrender.com/auth/signin', { ...data })
      .then(res => {
        console.log(res.data.accessToken);
        if (res.data.error) {
          setError('username', { message: res.data.error });
          return
        }
        localStorage.setItem('user', JSON.stringify(res.data.user));

        dispatch(setCurrentUser(res.data.user))
        navigate('/')
      })
      .catch(error => {
        setError('password', { message: 'Username or password is incorrect' })
        console.log(error);
      })
  }
  // console.log(localStorage.getItem('user'));
  return (
    <>
      <div className='flex items-center justify-center flex-col sm:px-6 px-4 h-[100vh]'>
        <div className='w-full max-w-[932px] mb-2'>
          <BackButton>
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
            Back
          </BackButton>
        </div>
        <div className='w-full max-w-[932px] flex items-center justify-center rounded-[6px] bg-[#10163a]'>
          <div className='w-1/2 md:flex items-center justify-center p-8 hidden'>
            <div className='w-full flex '>
              <img className='mx-auto' alt="" src="https://assets-prod.frzdb.net/img/0f6a3ab.png"></img>
            </div>
          </div>
          <div className='flex items-center md:w-1/2 w-full p-4'>
            <LoginForm>
              <span>Login</span>
              <InputGroup>
                {errors.username && <span className='error-text'>{errors.username.message}</span>}
                <div className='input-wrapper'>
                  <input
                    type='text' id='username' name='username' placeholder='username'
                    {...register("username", {
                      required: "Username cannot be blank",
                    })}
                  >

                  </input>
                  <span className="icon"><PersonOutlineOutlinedIcon /></span>
                </div>
                <label htmlFor='username'>Username</label>
              </InputGroup>
              <InputGroup>
                {errors.password && <span className='error-text'>{errors.password.message}</span>}
                <div className='input-wrapper'>
                  <input
                    type='password' id='password' name='password' placeholder='password'
                    {...register('password', {
                      required: "Password cannot be blank",
                    })}
                  >

                  </input>
                  <span className="icon"><LockOutlinedIcon /></span>
                </div>
                <label htmlFor='password'>Password</label>
              </InputGroup>
              <h3 className='text-center'>
                Forgot password ? <Link to='/reset-password' className='text-[#c2c6dc] no-underline hover:underline hover:text-[#7367f0]'>Reset</Link>
              </h3>
              <h3>
                Don't have an account ?
              </h3>
              <Link to='/register'>

                <SignUpButton type='button'>
                  Register
                </SignUpButton>
              </Link>
              <LoginButton onClick={handleSubmit(onSubmit)}>Login</LoginButton>
            </LoginForm>
          </div>
        </div>
      </div>
    </>
  )
}
