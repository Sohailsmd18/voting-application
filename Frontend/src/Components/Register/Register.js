import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Register() {
    const { register, handleSubmit, formState, reset } = useForm();
    const { errors } = formState;
    const navigate = useNavigate(); // To handle redirection

    const onSubmit = async (data) => {
        try {
            console.log('Form data:', data); // Log data for debugging
            const response = await axios.post('http://localhost:3000/user/signup', data);
            if (response.status === 200) {
                alert('Registration successful');
                console.log(response.data);
                reset();

                // Redirect to the Vote page after successful registration
                navigate('/vote');
            } else {
                alert('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form');
        }
    };

    return (
        <div id='register-container'>
            <form onSubmit={handleSubmit(onSubmit)} className='input-group'>
                <input
                    type='text'
                    placeholder='Name'
                    {...register('name', { required: 'Name is required' })}
                    required
                />
                {errors.name && <div className='error'>{errors.name.message}</div>}
                <br />
                <input
                    type='number'
                    placeholder='Age'
                    {...register('age', { required: 'Age is required' })}
                    required
                />
                {errors.age && <div className='error'>{errors.age.message}</div>}
                <br />
                <input
                    type='email'
                    placeholder='Email'
                    {...register('email', { required: 'Email is required' })}
                    required
                />
                {errors.email && <div className='error'>{errors.email.message}</div>}
                <br />
                <input
                    type='tel'
                    placeholder='Mobile'
                    {...register('mobile', { required: 'Mobile is required' })}
                    required
                />
                {errors.mobile && <div className='error'>{errors.mobile.message}</div>}
                <br />
                <input
                    type='text'
                    placeholder='Address'
                    {...register('address', { required: 'Address is required' })}
                    required
                />
                {errors.address && <div className='error'>{errors.address.message}</div>}
                <br />
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
                        pattern: {
                            value: /^.{6,}$/,
                            message: 'Password must contain at least 6 characters'
                        }
                    })}
                    required
                />
                {errors.password && <div className='error'>{errors.password.message}</div>}
                <br />
                <button type='submit'>Register</button>
                <p className='login-link'>
                    Already a member? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Register;
