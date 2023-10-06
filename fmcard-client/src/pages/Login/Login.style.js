import styled from "styled-components";
import theme from "../../Components/theme/theme";
export const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  .button-wrapper {
    width: 100%;
    max-width: 932px;
    text-align: left;
    margin-bottom: 8px;
  }
`

export const LoginWrapper = styled.div`
  width: 100%;
  max-width: 932px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.primary.main};
  /* padding: 16px 32px; */
  border-radius: 6px;
`
export const Left = styled.div`
  width: 50%;
  height: 100%;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  .image-wrapper {
    width: 100%;
    display: flex;
    img{
      margin-left: auto;
      margin-right: auto;
      display: block;
      
  }
  }
`
export const Right = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  box-sizing: border-box;
  padding: 16px;
`
export const LoginForm = styled.form`
  
  color: ${theme.text.main};
  text-align: left; 
  width: 100%;
  padding: 16px;
  span.form-heading{
    text-align: left;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 500;
  }
  h3{
    text-align: left;
    font-weight: 400;
    /* font-family: Monsterrat, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-size: 16px;
  }
  .policy{
    font-size: 12px;
    font-style: italic;
    font-weight: 300;
    width: 100%;
    display: block;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  
`
export const InputGroup = styled.div`
  display: flex;
  /* position: relative; */
  flex-direction: column-reverse;
  max-width:100%;
  margin-bottom: 12px;
  label{
    text-align: left;
    font-weight:400;
  }
  .input-wrapper{
    position:relative;
    span.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left:0;
    top: 50%;
    transform: translateY(-50%);
    padding:10px;
    svg{
      font-size: 16px!important;
    }
    &:focus-within{
      + label {
        color: ${theme.primary.active};
      }
    }
    select{
      width: 100%;
    }
  }
  // How can i select an element previous to css element ?
  }
  div input {
    width:100%;
    background-color: ${theme.primary.light};
    padding: 10px 14px 10px 42px;
    border-radius: 4px;
    border: 1px solid ${theme.primary.border};
    color: ${theme.text.main};
    outline: none;
    &:focus {
      border: 1px solid ${theme.primary.active};
      
      + span{
        svg{
          color: ${theme.primary.active}!important; 
        } 
      }
        
    }
    &.error{
      border-color:red;
      + span{
        svg{
          color: red!important; 
        } 
      }
    }
  }
  .error-text{
    color: red;
    font-size: 12px;
  }
`

export const LoginButton = styled.button`
  background-color:${theme.primary.contrastText};
  padding: 10px 28px;
  border-radius: 6px;
  color: #fff;
  font-size:1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  float: right;
  &:hover{
    cursor: pointer;
    background:linear-gradient(118deg,rgba(115,103,240,1),rgba(115,103,240,.7))!important;;
        box-shadow: 0 0 6px 1px rgba(115,103,240,.6)
        
  }
`

export const SignUpButton = styled.button`
  font-family: Montserrat,Helvetica,Arial,sans-serif;
  background-color:${theme.primary.main};
  padding: 10px 28px;
  color: ${theme.text.contrastText};
  font-size:1rem;
  border: 1px solid ${theme.primary.active};
  border-radius: 6px;
  float: left;
  &:hover{
    cursor:pointer ;
    /* background-color: ; */
  }
  a {
    &:hover{text-decoration: none;}
  }
`

export const BackButton = styled(SignUpButton)`
  border-color: #ff9f43;
  color: #ff9f43;
  text-align: left;
  background-color: unset;
  display: flex;
  align-items: center;
  font-size: 14px;
  > * {
      &:first-child {
         margin-right: 8px;
      }
    }
`
export const CheckboxInputGroup = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  input#agreement{
    display: none;
    &:checked + span:before{
      background-color:${theme.primary.active} ;
      color: #fff;
      content: '\\2714';
      position: absolute;
      top: -2px;
      right: 0;
      left: 0;
    }
  }
  span{
    border: 2px solid ${theme.primary.active};
    width: 24px;
    height: 23px;
    background-color: unset;
    color: ${theme.primary.active};
    margin-right: 8px;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
`