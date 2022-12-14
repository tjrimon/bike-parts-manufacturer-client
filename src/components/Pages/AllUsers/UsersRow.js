import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        const url = `http://localhost:5000/user/admin/${email}`
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UsersRow;