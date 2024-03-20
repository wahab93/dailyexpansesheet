import React, { useState, useEffect } from 'react'

export const Expanse = () => {
    const [expanseName, setExpanseName] = useState('');
    const [expanseDate, setExpanseDate] = useState('');
    const [expanseAmount, setExpanseAmount] = useState('');
    const [expanseimg, setExpanseImg] = useState('');
    const [expanseEdit, setExpanseEdit] = useState('');
    const [expanseToggle, setExpanseToggle] = useState(false);
    const [expanses, setExpanses] = useState(JSON.parse(localStorage.getItem('expanse') || '[]'));
    useEffect(() => {
        localStorage.setItem('expanse', JSON.stringify(expanses));
    }, [expanses]);

    const addExpanse = (e) => {
        e.preventDefault();
        if (!expanseName || !expanseDate || !expanseAmount) {
            alert('please enter expanse');
        }
        else if (expanseEdit && expanseToggle) {
            setExpanses(
                expanses.map((curElem) => {
                    if (curElem.id === expanseEdit) {
                        return { ...curElem, exName: expanseName, exDate: expanseDate, exAmount: expanseAmount };
                    }
                    return curElem;
                })
            )
            setExpanseName('');
            setExpanseDate('');
            setExpanseAmount('');
            setExpanseToggle(false)
        }
        else {
            const newEx = {
                id: new Date().getTime().toString(),
                exName: expanseName,
                exAmount: expanseAmount,
                exDate: expanseDate
            }
            setExpanses([...expanses, newEx]);
            localStorage.setItem('expanse', JSON.stringify(expanses));
            setExpanseName('');
            setExpanseDate('');
            setExpanseAmount('');
        }
    }
    const deleteExpanse = (idx) => {
        const update = expanses.filter((curElem) => {
            return curElem.id !== idx;
        })
        setExpanses(update);
    }
    const editExpanse = (idx) => {
        const find = expanses.find((curElem) => {
            return curElem.id === idx;
        })
        setExpanseEdit(idx);
        setExpanseName(find.exName);
        setExpanseDate(find.exDate);
        setExpanseAmount(find.exAmount);
        setExpanseToggle(true);
    }
    return (
        <>
            <div className='col-md-12'>
                <form className='my-4' onSubmit={addExpanse}>
                    <div className="row g-3">
                        <div className="col-md-3 col-6">
                            <input type="text" className="form-control" placeholder="Enter Name"
                                value={expanseName}
                                onChange={(e) =>
                                    setExpanseName(e.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <input type="date" max="2023-12-31" min="2020-12-31" className="form-control" placeholder="Enter Date"
                                value={expanseDate}
                                onChange={(e) =>
                                    setExpanseDate(e.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <input type="number" className="form-control" placeholder="Enter Amount"
                                value={expanseAmount}
                                onChange={(e) =>
                                    setExpanseAmount(e.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-3 col-6 text-end">
                            {
                                expanseToggle ? <button className='btn btn-success'>Edit</button>
                                    : <button className='btn btn-success'> Add</button>
                            }
                        </div>
                    </div>
                </form>
                {
                    expanses.map((curElem) => {
                        const { id, exName, exDate, exAmount, eximg } = curElem;
                        return (
                            <>
                                <div className='d-flex justify-content-between align-items-center p-2 border my-2' key={id}>
                                    <div className='col'>{exDate}</div>
                                    <div className='col'>{exName}</div>
                                    <div className='col'>{exAmount}/-</div>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" onClick={() => editExpanse(id)} className="btn btn-success">Edit</button>
                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">DEL</button>
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Item Delete</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Are you sure want to delete This item?
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">NO</button>
                                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => deleteExpanse(id)}>YES</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Modal For Delation of Expance */}
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
