import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="bg-[#21212111] cursor-pointer hover:scale-105 duration-300 shadow-md rounded-lg p-4 mb-4 flex flex-col gap-3 item-cemter justify-center">
            <div className='flex items-center justify-start gap-3'>
                <span className='w-12 h-12 border border-gray-800 overflow-hidden rounded-full'>
                    <img className='w-full h-full object-center object-cover' src={user.img} alt="profile image" />
                </span>
                <span>
                    <h1 className="text-lg font-semibold text-gray-800">{user.name}</h1>
                    <p className='text-gray-600'>{user.post}</p>
                </span>
            </div>

            <div className='md:mx-12'>
                <p className="text-gray-800 mb-10">Email: {user.email}</p>
                <div className='flex gap-5 my-5'>
                    <button className='px-3 py-0.5 text-md shadow-md hover:bg-black hover:text-white duration-300 font-semibold rounded-md border border-gray-900 bg-white'>Block</button>
                    <button className='px-3 py-0.5 text-md shadow-md hover:bg-white hover:text-black duration-300 font-semibold rounded-md border border-black bg-black text-white'>Details</button>

                </div>
            </div>
        </div>
    );
};

export default UserCard;
