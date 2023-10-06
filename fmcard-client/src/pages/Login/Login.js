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
import { useCookies } from 'react-cookie';
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({ mode: 'all' })
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate()
  const onSubmit = (data, event) => {
    event.preventDefault();

    axios.post('http://localhost:8888/auth/signin', { ...data })
      .then(res => {
        console.log(res.data);
        if (res.data.error) {
          setError('username', { message: res.data.error });
          return
        }
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setCookie('accessToken', res.data.accessToken, {
          path: '/',
          maxAge: 2592000,
          httpOnly: true,

        })
        navigate('/')
      })
      .catch(error => { console.log(error.toJSON()); })
  }
  console.log(localStorage.getItem('user'));
  return (
    <>
      <LoginPage>
        <div className='button-wrapper'>
          <BackButton>
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
            Back
          </BackButton>
        </div>
        <LoginWrapper>
          <Left>
            <div className='image-wrapper'>
              <img alt="" src="https://assets-prod.frzdb.net/img/0f6a3ab.png"></img>
            </div>
          </Left>
          <Right>
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
          </Right>
        </LoginWrapper>
      </LoginPage>
    </>
  )
}
