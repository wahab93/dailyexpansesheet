import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Expanse } from './Expanse';

export const Dashboard = () => {
  const navigation = useNavigate();
  const logOut = (() => {
    localStorage.removeItem('logedUser');
    navigation('/')
  })
  const localData = JSON.parse(localStorage.getItem('logedUser'))
  return (
    <>
      <div className="container-fluid py-5 my-b">
        <div className="row">
          <div className="col-md-12 mb-5">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <h4>Welcome to the Dashboard <strong>{localData.firstName + ' ' + localData.lastName}</strong></h4>
              <div>
                <button className='btn btn-outline-danger' onClick={logOut}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
        <Expanse />
      </div>
    </>
  )
}
