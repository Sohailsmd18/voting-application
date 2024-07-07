import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './login.css'
// import { error } from 'console';


function Login() {
    const { register, handleSubmit, formState, reset } = useForm()
    const { errors } = formState;

    //it handles the form submission
    const onSubmit = (data) => {
        alert('Form is Submitted')
        console.log(data);
        reset();
    };

    return (
        <div id='login-container'>
            <form onSubmit={handleSubmit(onSubmit)} className='input-group'>
                <input
                    type='aadharCard'
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
                <input type='password'
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
        </div >
    )
}


export default Login;

