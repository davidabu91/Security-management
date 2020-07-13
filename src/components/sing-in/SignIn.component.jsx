import React, { Component } from 'react'

import './singIn.styles.scss'

import FormInput from '../form-input/FormInput.component';

import CustomButton from '../custom-button/CustomButton.component';

export default class SignIn extends Component {


  constructor(props) {
    super(props);


    this.state = {
      email: '',
      passowrd: ''
    }
  }

  handleChange = (email,passowrd) => {
    this.setState({email: email, password:passowrd})
  }

  conect = (email, password) => {
    this.props.handleClick(email, password)
  }

  render() {
    return (

      <div className='sign-in'>
        <h2>i already have an account</h2>
        <span>sign in with your email and password</span>

        <form >
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label={'email'}
            required
          />
          <div className={this.props.correctEmail}>Sorry, this user does not exist</div>
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label={'password'}
            required
          />
          <div className={this.props.cerrectPassword}>Sorry, this user does not exist </div>

          <div className='button'>
            <CustomButton type="submit" handleClick={this.conect}
            > SIGN IN</CustomButton>
            {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn > {' '} SIGN IN WITH GOOGLE {' '}</CustomButton> */}

          </div>


        </form>
      </div>

    )


  }



}
