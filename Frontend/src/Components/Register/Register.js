// import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Register.css'
import { useForm } from "react-hook-form";

function Register() {
    const { register, handleSubmit, formState, reset } = useForm()
    const { errors } = formState;

    const onSubmit = (data) => {
        alert('Form is Submitted')
        console.log(data);
        reset();
    }


    return (
        <div id='register-container'>
           
            <form onSubmit={handleSubmit(onSubmit)} className='input-group'>
                <input
                    type='aadharCardNo'
                    placeholder='aadharCardNo'
                    {...register('aadharCardNo', {
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid aadharCardNo'
                        }
                    })}
                    required
                />
                {errors.email && <div className='error'>{errors.email.message}</div>}
                <br />
                <input type='text'
                    placeholder="Full Name"
                    {...register('fullName', {
                        required: 'Name is required'
                    })}
                    required
                />
                {errors.fullName && <div>{errors.fullName.message}</div>}
                <br />
                <select className="select-reason"
                    {...register('reason', {
                    })}
                    required
                >
                    <option value=' '>I'm Voter</option>
                    <option value='admin'> I'm Admin</option>
                </select>
                {errors.reason && <div className='error'>{errors.reason.message}</div>}
                <br />
                <input
                    type='tel'
                    placeholder='Phone Number'
                    {...register('phone', {
                        pattern: {
                            value: /^\d{10}$/,
                            message: 'Phone number must be 10 digits'
                        }
                    })}
                    required
                />
                {errors.phone && <div className='error'>{errors.phone.message}</div>}
                <br />
                <input type='password'
                    id='password'
                    placeholder='Your Password'
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
                <div className="checkbox-grp">
                    <input
                        type="checkbox"
                        {...register('terms', {
                            required: 'You must accept the terms and conditions'
                        })}
                    />
                    <label htmlFor="terms" className="terms">I Accept <Link to="/terms-conditions"> Terms and Conditions </Link> and
                        <Link to="/privacy">  Privacy Policy  </Link>
                    </label>
                </div>
                {errors.terms && <div className='error'>{errors.terms.message}</div>}
                <button type='submit'>Register</button>
                <p className='login-link'>
                    Not a member yet? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    )
}

export default Register;
