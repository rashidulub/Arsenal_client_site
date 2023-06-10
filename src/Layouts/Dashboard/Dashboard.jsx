import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaBookmark } from 'react-icons/fa';
import Navbar from '../../Pages/Home/Navbar/Navbar';
import Footer from '../../Pages/Home/Footer/Footer';

const Dashboard = () => {
    // TODO  admin load data
    const isAdmin = true
    const isInstructor = true


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#99f8fa] flex flex-col items-center ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>


                </div>
                <div className="drawer-side bg-[#ffb52b]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">



                    { isAdmin ?
                     (
                        <div> 
                             <li><NavLink to="/dashboard/myclass"><FaBookmark></FaBookmark>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/enroll"><FaCalendarAlt></FaCalendarAlt>Manage Classes</NavLink></li>
                            
                            <li><NavLink to="/dashboard/allUsers"><FaWallet></FaWallet> Manage Users</NavLink></li>
                        </div>
                    ) :
                     isInstructor ? 
                     (
                        <div>
                            <li><NavLink to="/dashboard/myclass"><FaBookmark></FaBookmark>Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/enroll"><FaCalendarAlt></FaCalendarAlt>My Class</NavLink></li>
                            
                            
                        </div>
                    ): (
                        <div> 
                            <li><NavLink to="/dashboard/myclass"><FaBookmark></FaBookmark>My Selected Class</NavLink></li>
                            <li><NavLink to="/dashboard/enroll"><FaCalendarAlt></FaCalendarAlt> Enroll Class</NavLink></li>
                            
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                        </div>
                    )

                    }

                    




                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                </ul>

            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;