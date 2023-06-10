import React, { useContext } from 'react';
import useMenu from '../../../hooks/UseMenu/useMenu';
import { AuthContext } from '../../Provider/AuthProvider';

const ManageClass = () => {
    const [menu]= useMenu();
    console.log('menuuuu',menu);
    const {user}= useContext(AuthContext)
    console.log('userrrr',user);
    return (
        <div>
            <div className='w-full mt-14 '>
             
             <div className="w-full">
                 
                 <div className="uppercase font-semibold h-[60px] flex justify-evenly ">
                 <h3 className="text-3xl uppercase my   border-b-4 border-indigo-500 py-4">Selected Class</h3>
                     
                     
                     
                 </div>
                 <div className="overflow-x-auto mt-10 w-full">
                     <table className="table w-full">
                         {/* head */}
                         <thead className='font-bold'>
                             <tr >
                                 <th>#</th>
                                 <th >Image</th>
                                 <th>Class Name</th>
                                 <th>Instructor Name</th>
                                 <th>Instructor Email</th>
                                 <th>Available seats</th>
                                 <th>Price</th>
                                 <th>Available Site</th>
                                 <th>Delete</th>
                                 <th>Payment</th>
                             </tr>
                         </thead>
                         <tbody>
                             
                             <tr>
                                     
                                     
                                     <td>
                                         <div className="avatar">
                                             
                                             <div className="mask mask-squircle w-12 h-12">
                                                 <img src={item.photoURL} alt="Avatar Tailwind CSS Component" />
                                             </div>
                                         </div>
                                     </td>
                                     <td className='text-xl font-bold'>
                                         {item.name}
                                     </td>
                                     <td className='text-xl font-bold'>
                                         {item.name}
                                     </td>
                                     <td className='text-xl font-bold'>
                                         {item.name}
                                     </td>
                                     <td className='text-xl font-bold'>
                                         {item.name}
                                     </td>
                                     <td className="font-bold">${item.price}</td>
                                     <td className="font-bold text-2xl">{item.sit}</td>
                                     <td>
                                         <button onClick={() => handleDelete(item._id)}  className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                     </td>
                                     <td>
                                         <Link to='/dashboard/payment'>
                                         <button  className="btn btn-ghost bg-blue-700  text-white"><FaWallet></FaWallet></button></Link>
                                     </td>
                                 </tr>
 
 
                         </tbody>
                     </table>
                 </div>
             </div>
         </div>
        </div>
    );
};

export default ManageClass;