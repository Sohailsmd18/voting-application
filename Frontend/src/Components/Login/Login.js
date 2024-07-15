import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './login.css';

function Login() {
    const { register, handleSubmit, formState, reset } = useForm()
    const { errors } = formState;

    //it handles the form submission
    const onSubmit = async (data) => {
        try {
            console.log('Login data:', data); // Log data for debugging
            const response = await axios.post('http://localhost:3001/user/login', data);
            if (response.status === 200) {
                alert('Login successful');
                console.log(response.data);
                reset();
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred while logging in');
        }
    };
         
    return (
        <div id='login-container'>
            <form onSubmit={handleSubmit(onSubmit)} className='input-group'>
                <input
                    type='text'
                    placeholder='Aadhar Card Number'
                    {...register('aadharCardNumber', {
                        pattern: {
                            value: /^\d{12}$/,
                            message: 'Invalid Aadhar Card Number'
                        }
                    })}
                    required
                />
                {errors.aadharCardNumber && <div className='error'>{errors.aadharCardNumber.message}</div>}
                <br />
                <input
                    type='password'
                    placeholder='Password'
                    {...register('password', {
                        required: 'Password is required',
                        pattern: {
                            value: /^.{6,}$/,
                            message: 'Password must contain at least 6 characters'
                        }
                    })}
                    required
                />
                {errors.password && <div className='error'>{errors.password.message}</div>}
                <br />
                <p className='forgot-password'>
                    <Link to='/forgot-password'>Forgot Password?</Link>
                </p>
                <button type='submit'>Login</button>
                <p className='register-link'>
                    Not a member yet? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
}


export default Login;

