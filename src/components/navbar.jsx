import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
    
        <header className=' flex justify-between p-3'>
            <NavLink to={'/'} className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                </svg>

                <span className='font-bold text-xl'>Acme.co</span>
            </NavLink>

            <div className='flex gap-5 font-medium py-2 px-4 '>
                <div>Home</div>
                
                <div>About</div>
        
                <div>Products</div>

                <div>Contacts</div>
            </div>
            <button to={'/'} className='flex items-center gap-2 border text-white rounded-lg py-2 px-4 bg-black '>
                Buy Now
            </button>

        </header>
    )
}
