import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer container mx-auto drawer-mobile bg-gray-100">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content pl-8 pr-5">
                {/* <!-- Page content here --> */}
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Menu</label>
                <h2 className='text-5xl text-primary py-5'>My Order</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side bg-gray-100">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-gray-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='btn btn-primary my-1.5'><Link to="/dashboard">DashBoard</Link></li>
                    <li className='btn btn-primary my-1.5'><Link to="/dashboard/review">Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;