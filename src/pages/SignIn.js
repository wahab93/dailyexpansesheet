import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPass, setLoginPass] = useState('');
    const navigation = useNavigate();
    const loginUser = (e) => {
        e.preventDefault();
        if (!loginEmail || !loginPass) {
            alert('please fill those inputs');
            return;
        }
        const localData = JSON.parse(localStorage.getItem('regUser') || '[]');
        var i = 0;
        const find = localData.find((curElem) =>
            curElem.regEmail === loginEmail &&
            curElem.regPass === loginPass
        )
        i++;
        if (!find) {
            alert('please Register Yourself');
        } else if (find === undefined) {
            alert('wrong inputs...!');
        } else if (i === 1) {
            navigation('/dashboard');
            localStorage.setItem('logedUser', JSON.stringify(find));
            setLoginEmail('');
            setLoginPass('');
        }
    }
    return (
        <>
            <div className="container" id='signin'>
                <div className="row justify-content-center my-5">
                    <div className="col-md-6">
                        <h1>SIGN IN</h1>
                        <form className='my-4' onSubmit={loginUser}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={loginEmail}
                                    onChange={(e) =>
                                        setLoginEmail(e.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    value={loginPass}
                                    onChange={(e) =>
                                        setLoginPass(e.target.value)
                                    }
                                />
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <button type="submit" className="btn btn-success">Sign In</button>
                                <span>
                                    Create new Account |
                                    <Link to='/signUp' className='ms-1'>Register</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
