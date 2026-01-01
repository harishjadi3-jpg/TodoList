import React from 'react'
const Navbar = () => {
    return (
        <div className='h-10 w-full bg-blue-500 m-0 p-0 flex justify-around md:justify-between items-center '>
            <h1 className='text-3xl'>Achive</h1>
            <ul className='flex w-[30%] m-2 justify-evenly  items-baseline'>
                <li className='flex justify-center items-center hover:cursor-pointer text-xl'><span className="material-symbols-outlined my-2">
                    home
                </span>Home</li>
                <li className='flex justify-center items-center hover:cursor-pointer text-xl'><span className="material-symbols-outlined my-2">
                    build
                </span>Tasks</li>
            </ul>
        </div>
    )
}

export default Navbar
