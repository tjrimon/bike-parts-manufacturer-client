import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer container mx-auto drawer-mobile bg-gray-100">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content pl-8 pr-5">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>
                <h2 className='text-5xl text-primary py-5'>My Order</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side bg-gray-100">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-gray-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='btn btn-primary my-1.5'><Link to="/dashboard">DashBoard</Link></li>
                    <li className='btn btn-primary my-1.5'><Link to="/dashboard/review">Review</Link></li>
                    <li className='btn btn-primary my-1.5'><Link to="/dashboard/users">All User</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;