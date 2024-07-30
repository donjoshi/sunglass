import React from 'react'
import Navbar from '../components/navbar'
import sunglass4 from './sunglass4.jpeg'

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col md:flex-row justify-around items-center p-8 bg-gray-50 min-h-screen'>
                <div className='w-full md:w-1/2 p-4'>
                    <h1 className='text-4xl font-bold mb-4'>Contact Us</h1>
                    <p className='text-lg text-gray-600 mb-8'>Have a question or need assistance? Get in touch with our friendly customer support team.</p>
                    <form className='flex flex-col gap-4'>
                        <div>
                            <label className='block text-gray-700 mb-1' htmlFor='name'>Name</label>
                            <input
                                type='text'
                                id='name'
                                className='w-full p-2 border border-gray-300 rounded'
                                placeholder='Enter your name'
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-1' htmlFor='email'>Email</label>
                            <input
                                type='email'
                                id='email'
                                className='w-full p-2 border border-gray-300 rounded'
                                placeholder='Enter your email'
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-1' htmlFor='message'>Message</label>
                            <textarea
                                id='message'
                                className='w-full p-2 border border-gray-300 rounded'
                                placeholder='Enter your message'
                                rows='4'
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div className='w-full md:w-1/2 p-4 flex items-center justify-center'>
                <div className='md:w-1/2 shadow-lg rounded-3xl'>
                    <img src={sunglass4} className='rounded-3xl p-2 shadow-gray-800' />
                </div>
                </div>
            </div>

        </div>
    )
}
