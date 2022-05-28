import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Controls</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.map(orders => <> {
                            user.email === orders.user ? <tr>
                                <td>{orders.item}</td>
                                <td>{orders.totalItems}</td>
                                <td>Pending</td>
                                <td>Unpaid</td>
                                <td>
                                    <div className='flex items-center'>
                                        <button title='cancel' className='text-white px-2 py-1  bg-red-600 text-xl cursor-pointer'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                                    </div>
                                </td>
                            </tr> : ''
                        }</>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;