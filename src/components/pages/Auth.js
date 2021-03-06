import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

export class Auth extends Component {
  // static propTypes = {
  //   username: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   password: PropTypes.string.isRequired,
  //   password2: PropTypes.string.isRequired,
  // }

    state = {
      username: '',
      email: '',
      password: '',
      password2: '',
    }

    checkusername = (e) => {
      console.log(e.target.value);
      this.state.username = e.target.value;
    }

    checkemail = (e) => {
      console.log(e.target.value);
      this.state.email = e.target.value;
    }

    checkpassword = (e) => {
      console.log(e.target.value);
      this.state.password = e.target.value;
    }

    checkpassword2 = (e) => {
      console.log(e.target.value);
      this.state.password2 = e.target.value;
    }

    formSubmit = async (e) => {
      e.preventDefault();

      const { username, email, password } = this.state;
      const data = await fetch('http://localhost:3201', {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      console.log(data);
    }

    render() {
      const { value } = this.state;
      return (
        <AuthC>
          <p>Authentication form</p>
          <form onSubmit={this.formSubmit}>
            <label htmlFor="username">
                username
              <input type="text" name="username" value={value} onBlur={this.checkusername} />
            </label>
            <label htmlFor="email">
                email
              <input type="email" name="email" value={value} onBlur={this.checkemail} />
            </label>
            <label htmlFor="password">
                password
              <input type="password" name="password" value={value} onBlur={this.checkpassword} />
            </label>
            <label htmlFor="password2">
                confirm password
              <input type="password" name="password2" value={value} onBlur={this.checkpassword2} />
            </label>
            <label htmlFor="submit">
              <input type="submit" id="submit" />
            </label>
          </form>
        </AuthC>
      );
    }
}


export const Ubuntu = "'Ubuntu', sans-serif;";
const AuthC = styled.div`
    margin: 80px 0 0 0;
    width: 100%;
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');
    font-family: ${Ubuntu};
    p{
        margin: 0 0 20px 0;
        text-align: center;
        font-size: 1.3em;
        font-weight: bold;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        label{
            margin: 5px 0;
            color: rgba(82,81,18, 0.8);
            font-size: .8em;
        }
        
        input{
            display: block;
            font-family: ${Ubuntu};
            width: 400px;
            border: none;
            border-bottom: 1px solid rgba(82,81,81, 0.2);
            padding: 5px;
            margin: 5px 0;
            outline: none;
            @media (max-width: 450px) {
                width: 260px;
            }
            &:-webkit-autofill,
            &:-webkit-autofill:hover,
            &:-webkit-autofill:focus,
            &:-webkit-autofill:active {
            transition: background-color 25000s ease-in-out 0s;
            }
        }
        input[name='image']{
            border: none;
        }
        input[type='submit']{
            border: none;
            border-radius: 5px;
            width: 410px;
            cursor: pointer;
            @media (max-width: 450px) {
                width: 260px;
            }
            &:hover{
                color: grey;
            }
        }

        textarea{
            display: block;
            width: 410px;
            resize: none;
            border: none;
            border-bottom: 1px solid rgba(82,81,81, 0.2);
            outline: none;
            @media (max-width: 450px) {
                width: 270px;
            }
        }
    }
`;
