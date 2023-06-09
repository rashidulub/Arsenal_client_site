import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ClassesCard = ({ item }) => {

    const { name, image, instructor, enroll, price, sit, _id } = item
    const { user } = useContext(AuthContext)
    
    const navigate = useNavigate();
    const location = useLocation();

    
    const handleAddClass = item => {
        console.log(item);
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, sit, image, price, email: user.email}
            fetch('http://localhost:5000/classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                  
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to Add class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }


    return (
        <div className="card w-full   shadow-xl bg-teal-100">
            <figure><img className='p-2 w-full rounded h-72' src={image} alt="Shoes" /></figure>

            <div className="card-body flex flex-col ">
                <h3 className="card-title text-3xl">Class Name:<span className='text-red-700 font-bold'> {name}</span></h3>
                <h2 className="card-title">Instructor Name:<span className='text-green-700 font-bold'> {instructor}</span></h2>
                <p className='font-bold'>Available seats: <span className='text-xl font-bold text-orange-700'>{sit}</span></p>
                <p className='font-bold'>Price: <span className='text-xl font-bold text-orange-700'>${price}</span></p>
                <div className="card-actions flex-col flex items-center justify-end">
                    <button  onClick={() => handleAddClass(item)} className="btn btn-outline bg-orange-500 border-0 border-b-4 border-b-purple-950 mt-4">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;