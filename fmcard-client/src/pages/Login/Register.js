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
export default function Register() {

  const navigate = useNavigate()
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
    console.log(brcypt.hashSync(data.password, 10));
    // console.log(data);
    axios.post('https://renderz-app.onrender.com/auth/create', { ...data, userAvatar: "" })
      .then(res => {
        console.log(res.data);
        if (res.data.error) {
          setError('username', { message: res.data.error })
          return
        }
        navigate('/')
        localStorage.setItem('user', JSON.stringify(res.data))
      })
      .catch(err => { throw new Error(err) })
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
          <div className='w-1/2 md:flex items-center justify-center p-8 hidden'>
            <div className='w-full flex '>
              <img className='mx-auto' alt="" src="https://assets-prod.frzdb.net/img/0f6a3ab.png"></img>
            </div>
          </div>
          <div className='flex items-center md:w-1/2 w-full p-4'>
            <LoginForm>
              <h2 className='form-heading font-semibold' >Register</h2>
              <InputGroup>
                {errors.username && <span className='error-text'>{errors.username.message}</span>}
                <div className='input-wrapper'>
                  <input
                    className={errors.username ? 'error' : ''}
                    type='text'
                    id='username'
                    name='username'
                    placeholder='username'
                    // onChange={e => setUser({ ...user, username: e.target.value })}
                    {...register("username", {
                      required: "Username cannot be blank",
                      minLength: {
                        value: 6,
                        message: "Username must be at least 6 character"
                      },
                      pattern: {
                        value: !/^[a-zA-Z0-9_]+$/,
                        message: 'Username must contain lowercase,number and underscore'
                      },

                    })}
                  ></input>
                  <span className="icon"><PersonOutlineOutlinedIcon /></span>
                </div>
                <label htmlFor='username'>Username</label>
              </InputGroup>
              <InputGroup>
                {errors.password && <span className='error-text'>{errors.password.message}</span>}
                <div className='input-wrapper'>
                  <input
                    className={errors.username ? 'error' : ''}
                    type='password'
                    id='password'
                    name='password'
                    placeholder='password'
                    // onChange={(e) => setUser({
                    //   ...user, password: e.target.value
                    // })}
                    {...register("password", {

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
                <label htmlFor='password'>Password</label>
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
                          const { password } = getValues();
                          return password === p || "Passwords doesn't match!";
                        }
                      },
                    })}
                  ></input>
                  <span className="icon"><LockOutlinedIcon /></span>
                </div>
                <label htmlFor='password-repeat'>Password Repeat</label>
              </InputGroup>
              <CheckboxInputGroup>
                <input type='checkbox' name="agreement" id="agreement" {
                  ...register('agreement', {
                    required: "You must accept the terms and conditions"
                  })
                }></input>
                <span></span>
                I hereby confirm that I'm 16+ years of age or have parental permission to register.
              </CheckboxInputGroup>
              {errors.agreement && (<span className='error-text'>{errors.agreement.message}</span>)}
              <span className='policy'>FIFARenderZ doesn't save any personal data.</span>
              <Link to='/login'>
                <SignUpButton type='button'>
                  Login
                </SignUpButton>
              </Link>
              <LoginButton onClick={handleSubmit(onSubmit)} >Register</LoginButton>
            </LoginForm>
          </div>
        </div>
      </div>
    </>
  )
}
