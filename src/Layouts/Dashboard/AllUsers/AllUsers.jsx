import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserFriends, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const {data : users =[], refetch}= useQuery(['users'], async()=>{
        const res = await fetch('http://localhost:5000/user')
        return res.json();

    })

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/user/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = user =>{
        fetch(`http://localhost:5000/user/instructor/${user._id}`,{
            method: 'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }

    
    return (
        <div className="w-full">
        
        <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Instructor</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td className='font-bold'>{user.name}</td>
                            <td className='font-bold'>{user.email}</td>
                            
                            <td>
                            {/* onClick={() => handleMakeInstructor(user)} */}
                                { user.role === 'instructor' ? 'instructor' :
                                <button  onClick={() =>  handleMakeInstructor(user)} className="btn btn-ghost bg-red-500  text-white"><FaUserFriends></FaUserFriends></button> 
                                }
                                </td>
                                <td>{ user.role === 'admin' ? 'admin' :
                                <button onClick={() =>  handleMakeAdmin(user)} className="btn btn-ghost bg-green-700  text-white"><FaUserShield></FaUserShield></button> 
                                }</td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    
    );
};

export default AllUsers;