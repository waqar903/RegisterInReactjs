import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './register.styles.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      profilePicture: '',
      phone: '',
      birthday: '',
      country: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      profilePicture: '',
      phone: '',
      birthday: '',
      country: '',
    });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Register</h2>
        <span>Sign up with your personal information</span>

        <form onSubmit={this.handleSubmit}>
        <FormInput
            name='firstname'
            type='text'
            handleChange={this.handleChange}
            value={this.state.firstname}
            label='Firstname'
            minLength='3'
            required
          />
          <FormInput
            name='lastname'
            type='text'
            handleChange={this.handleChange}
            value={this.state.lastname}
            label='Lastname'
            minLength='3'
            required
          />

          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            minLength='8'
            required
          />
          <FormInput
            name='profilePicture'
            type='file'
            value={this.state.profilePicture}
            handleChange={this.handleChange}
            label='Profile Picture'
          />
          <FormInput
            name='phone'
            type='tel'
            value={this.state.phone}
            handleChange={this.handleChange}
            label='Phone Number'
          />
          <FormInput
            name='birthday'
            type='date'
            value={this.state.birthday}
            handleChange={this.handleChange}
            label='Birthday Date'
          />
          
          <CustomButton type='submit'> Register </CustomButton>
        </form>
      </div>
    );
  }
}

export default Register;
