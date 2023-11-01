import React from 'react'
import {
  LoginPage, LoginWrapper, Left, Right,
  LoginForm, InputGroup, LoginButton,
  SignUpButton, BackButton, CheckboxInputGroup
} from './Login.style';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import brcypt from 'bcryptjs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../feature/user/userSlice';

export default function ResetPassword() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    // watch,
    getValues,
    formState: { errors },
    setError
  } = useForm({ mode: 'all' })
  // console.log(user);
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    console.log(brcypt.hashSync(data.oldPassword, 10));
    dispatch(changePassword(data))
    navigate('/')
  }
  return (
    <>
      <div className='flex items-center justify-center flex-col sm:px-6 px-4 h-[100vh]'>
        <div className='w-full max-w-[932px] mb-2'>
          <Link to='/home'>

            <BackButton>
              <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
              Home
            </BackButton>
          </Link>
        </div>
        <div className='w-full max-w-[932px] flex items-center justify-center rounded-[6px] bg-[#10163a]'>
          <div className='w-1/2 md:flex items-center justify-center p-8 hidden' >
            <div className='w-full flex'>
              <img alt="" src="https://assets-prod.frzdb.net/img/0f6a3ab.png"></img>
            </div>
          </div>
          <div className='flex items-center md:w-1/2 w-full p-4'>
            <LoginForm>
              <h2 className='form-heading font-semibold' >Reset Password</h2>
              <InputGroup>
                {errors.username && <span className='error-text'>{errors.username.message}</span>}
                <div className='input-wrapper'>
                  <input
                    className={errors.username ? 'error' : ''}
                    type='password'
                    id='Old Password'
                    name='Old Password'
                    placeholder='Old Password'
                    // onChange={e => setUser({ ...user, Old Password: e.target.value })}
                    {...register("oldPassword", {
                      required: "Password cannot be blank",
                      minLength: {
                        value: 8,
                        message: 'Password length must be at least 8 characters'
                      },
                      pattern: {
                        value: !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                        message: 'Password must contain lowercase, uppercase,number and special characters'
                      }

                    })}
                  ></input>
                  <span className="icon"><PersonOutlineOutlinedIcon /></span>
                </div>
                <label htmlFor='username'>Old Password</label>
              </InputGroup>
              <InputGroup>
                {errors.password && <span className='error-text'>{errors.password.message}</span>}
                <div className='input-wrapper'>
                  <input
                    className={errors.username ? 'error' : ''}
                    type='password'
                    id='new-password'
                    name='new-password'
                    placeholder='new password'
                    // onChange={(e) => setUser({
                    //   ...user, password: e.target.value
                    // })}
                    {...register("newPassword", {

                      required: "Password cannot be blank",
                      minLength: {
                        value: 8,
                        message: 'Password length must be at least 8 characters'
                      },
                      pattern: {
                        value: !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                        message: 'Password must contain lowercase, uppercase,number and special characters'
                      }
                    })}
                  ></input>
                  <span className="icon"><LockOutlinedIcon /></span>
                </div>
                <label htmlFor='new-password'>New Password</label>
              </InputGroup>
              <InputGroup>
                {errors.passwordRepeat && <span className='error-text'>{errors.passwordRepeat.message}</span>}
                <div className='input-wrapper'>
                  <input
                    type='password'
                    id='password-repeat'
                    name='password-repeat'
                    placeholder='password repeat'
                    // onChange={(e) => setUser({
                    //   ...user, passwordRepeat: e.target.value
                    // })}
                    {...register("passwordRepeat", {

                      required: "Password repeat cannot be blank",

                      validate: {
                        isIdentical: p => {
                          const { newPassword } = getValues();
                          return newPassword === p || "Passwords doesn't match!";
                        }
                      },
                    })}
                  ></input>
                  <span className="icon"><LockOutlinedIcon /></span>
                </div>
                <label htmlFor='password-repeat'>Password Repeat</label>
              </InputGroup>


              <div className='flex items-center justify-center mt-5'>
                <LoginButton className='text-center' onClick={handleSubmit(onSubmit)} >Reset Password</LoginButton>
              </div>
            </LoginForm>
          </div>
        </div>
      </div>
    </>
  )
}
