import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPass, setRegPass] = useState('');
    const [regConPass, setRegConPass] = useState('');
    const navigation = useNavigate();

    const registerUser = (e) => {
        e.preventDefault();
        const localData = JSON.parse(localStorage.getItem('regUser') || '[]');
        const filter = localData.find((curElem) => {
            return curElem.regEmail === regEmail;
        })
        if (!firstName || !lastName || !regEmail || !regPass || !regConPass) {
            alert('Please Fill All those inputs');
        } else if (regPass !== regConPass) {
            alert('Password Does not Match');
        } else if (filter) {
            alert('This Email is already in use, please select another Email');
        } else {
            const newUser = {
                firstName: firstName,
                lastName: lastName,
                regEmail: regEmail,
                regPass: regPass,
                regConPass: regConPass
            }
            localData.push(newUser);
            localStorage.setItem('regUser', JSON.stringify(localData));
            setFirstName('');
            setLastName('');
            setRegEmail('');
            setRegPass('');
            setRegConPass('');
            alert('you are registered')
            navigation('/');
            
        }
    }
    return (
        <>
            <div className="container" id='signup'>
                <div className="row justify-content-center my-5">
                    <div className="col-md-6">
                        <h1>SIGN UP</h1>
                        <form className='my-4' onSubmit={registerUser}>
                            <div className='d-flex justify-content-between flex-wrap'>
                                <div className="mb-3 w-50">
                                    <label htmlFor="exampleInputfname" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="exampleInputfname"
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3" style={{ width: '49%' }}>
                                    <label htmlFor="exampleInputlname" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="exampleInputlname"
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={regEmail}
                                    onChange={(e) =>
                                        setRegEmail(e.target.value)
                                    }
                                />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className="mb-3 w-50">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                        value={regPass}
                                        onChange={(e) =>
                                            setRegPass(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3" style={{ width: '49%' }}>
                                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2"
                                        value={regConPass}
                                        onChange={(e) =>
                                            setRegConPass(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <button type="submit" className="btn btn-success">Sign Up</button>
                                <span>
                                    Already have Account |
                                    <Link to='/' className='ms-1'>Login</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
