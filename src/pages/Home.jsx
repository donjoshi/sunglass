// import React from 'react'
// import Navbar from '../components/navbar'
// import sunglass1 from './sunglass1.jpeg'
// import sunglass2 from './sunglass12jpeg.jpg'
// import sunglass3 from './sunglass3.jpeg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import Footer from '../components/footer'

// export default function Home() {
//     return (
//         <div>
//             <Navbar />
//             <div className='flex justify-around bg-gray-800 text-white py-12 p-3'>
//                 <div className='mt-6 justify-items-start flex flex-col justify-center text-left'>
//                     <span className='font-bold text-7xl'> Elevate Your Style <br /> with Out Premium <br /> Sunglasses</span>
//                     <span className='py-6 text-lg'>Experience the perfect blend of fashion and functionality <br />
//                         with our meticulously crafted sunglasses. Designed to <br />
//                         enhance your look and protect your eyes, these <br />
//                         sunglasses are a must-have for the modern individual.</span>

//                     <div className='w-full flex justify-left mt-8 gap-5 mb-8'>
//                         <button className='bg-black rounded-md p-2 font-medium'>Buy Now</button>
//                         <button className='bg-white rounded-md text-black p-1 font-medium'>Learn More</button>
//                     </div>
//                 </div>
//                 <div className='rounded-full p-7'>
//                     <img src={sunglass1} className='border-4 border-white rounded-full p-1' />
//                 </div>
//             </div>

//             <div className='flex justify-around m-3 gap-5 '>
//                 <div className='flex flex-col p-3 shadow-xl'>
//                     <span className='text-3xl font-semibold  py-5'>Premium Quality</span>
//                     <span className='text-gray-600'>Our sunglasses are crafted with the
//                         finest materials and attention to detail,
//                         ensuring long-lasting durability and
//                         exceptional performance.
//                     </span>
//                 </div>
//                 <div className='flex flex-col p-3 shadow-xl'>
//                     <span className='text-3xl font-semibold  py-5'>Unparalleled Style</span>
//                     <span className='text-gray-600'>Elevate your look with our timeless and
//                         on-trend designs, perfect for any
//                         occasion. Stand out from the crowd
//                         with our unique and fashionable
//                         sunglasses.
//                     </span>
//                 </div>
//                 <div className='flex flex-col p-3 shadow-xl'>
//                     <span className='text-3xl font-semibold  py-5'>Exceptional Comfort</span>
//                     <span className='text-gray-600'>Comfort is key, and our sunglasses are
//                         designed to provide a comfortable fit
//                         that you can wear all day long without
//                         fatigue.
//                     </span>
//                 </div>
//             </div>

//             <div className='flex mt-8 justify-around  px-5  py-9'>
//                 <div className='flex-col  justify-center p-2'>
//                     <div className='font-bold text-3xl gap-2 py-3 '>What Our Customers Say</div>

//                     <span className='text-gray-600 text-lg'>Hear from our satisfied customers and see why they love our <br />
//                         premium sunglasses.</span>

//                     <div className='p-3 gap-4'>
//                         <div className='justify-start py-4'>
//                             <div className='flex gap-2 py-3 '>
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//                                 </svg>

//                                 <span className='font-bold'>John Doe, Fashion Enthusiast</span>
//                             </div>
//                             <div className='text-gray-500'>
//                                 "These sunglasses are a game-changer! The quality is <br />
//                                 exceptional, and the style is unparalleled. I'vereceived <br />
//                                 so many compliments since I started wearing them."
//                             </div>
//                             <div className='flex mt-2'>
//                                 <FontAwesomeIcon icon={faStar} className='text-black-500' />
//                                 <FontAwesomeIcon icon={faStar} className='text-black-500' />
//                                 <FontAwesomeIcon icon={faStar} className='text-black-500' />
//                                 <FontAwesomeIcon icon={faStar} className='text-black-500' />
//                                 <FontAwesomeIcon icon={faStar} className='text-black-500' />
//                             </div>
//                         </div>
//                         <div className='justify-start py-4'>
//                             <div className='flex gap-2 py-3 '>
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//                                 </svg>

//                                 <span className='font-bold'>Sarah Anderson, Outdoor Enthusiast</span>
//                             </div>
//                             <div className='text-gray-500'>
//                                 "I absolutely love these sunglasses! They provide <br />
//                                 excellent UV protection and are perfect for my active <br />
//                                 lifestyle. The comfort and durability are unmatched."
//                             </div>
//                             <div className='flex mt-2'>
//                                 <FontAwesomeIcon icon={faStar} className='text-black-500' />
//                                 <FontAwesomeIcon icon={faStar} className='text-black-500' />
//                                 <FontAwesomeIcon icon={faStar} className='text-black-500' />
//                                 <FontAwesomeIcon icon={faStar} className='text-black-500' />
//                                 <FontAwesomeIcon icon={faStar} className='text-gray-400' />
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//                 <div className='size-5/12 '>
//                     <img src={sunglass2} className='rounded-3xl p-2 shadow-gray-800' />
//                 </div>

//             </div>

//             <div className='justify-around flex p-10 bg-gray-200 gap-3 text-left '>
//                 <div className='p-2 m-2 '>
//                     <div className='font-bold text-4xl mb-2'>
//                         Secure and Reliable
//                     </div>
//                     <span className='text-gray-700'>We take your privacy and security seriously. Rest assured that your personal and payment information is safe with us.</span>
//                 </div>
//                 <div className='p-2 m-2 '>
//                     <div className='font-bold text-4xl mb-2'>
//                         Easy Returns
//                     </div>
//                     <span className='text-gray-700'>We stand behind the quality of our products. If you're not satisfied, you can return your purchase within 30 days for a full refund.</span>
//                     <div className='flex gap-3 py-5 font-semibold'>
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7 font-bold">
//                             <path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd" />
//                         </svg>

//                         <span className='text-gray-700'>30-day return policy</span>

//                     </div>
//                 </div>
//             </div>

//             <div className='flex mt-8 justify-around  px-5  py-9'>
//                 <div className='flex-col  justify-center p-2'>
//                     <div className='font-bold text-5xl gap-2 py-3 '>Elevate Your Style </div>

//                     <span className='text-gray-600 text-lg'>Discover the perfect pair of sunglasses to complement your <br />
//                     unique style and make a lasting impression.</span>
//                     <div className='py-4 mt-3'>
//                         <button className='bg-black font-bold text-2xl text-white p-4 rounded-lg text-center'>Shop Now</button>
//                     </div>



//                 </div> 

//                 <div className='size-4/12 shadow-lg rounded-3xl'>
//                     <img src={sunglass3} className='rounded-3xl p-2 shadow-gray-800' />
//                 </div>

//             </div>
//             <Footer />



//         </div>
//     )
// }

import React from 'react'
import Navbar from '../components/navbar'
import sunglass1 from './sunglass1.jpeg'
import sunglass2 from './sunglass12jpeg.jpg'
import sunglass3 from './sunglass3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate=useNavigate();


    function LearnMore() {
        navigate('/about');        
    }
    return (
        <div>
            <Navbar />
            <div className='flex flex-col md:flex-row justify-around bg-gray-800 text-white py-12 px-5'>
                <div className='mt-6 justify-items-start flex flex-col justify-center text-left md:w-1/2'>
                    <span className='font-bold text-4xl md:text-7xl'> Elevate Your Style <br /> with Our Premium <br /> Sunglasses</span>
                    <span className='py-6 text-sm md:text-lg'>Experience the perfect blend of fashion and functionality <br />
                        with our meticulously crafted sunglasses. Designed to <br />
                        enhance your look and protect your eyes, these <br />
                        sunglasses are a must-have for the modern individual.</span>

                    <div className='w-full flex justify-left mt-8 gap-5 mb-8'>
                        <button className='bg-black rounded-md p-2 font-medium'>Buy Now</button>
                        <button className='bg-white rounded-md text-black p-1 font-medium' onClick={LearnMore}>Learn More</button>
                    </div>
                </div>
                <div className='rounded-full p-7 md:w-1/2'>
                    <img src={sunglass1} className='border-4 border-white rounded-full p-1' />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-around m-3 gap-5 '>
                <div className='flex flex-col p-3 shadow-xl'>
                    <span className='text-xl md:text-3xl font-semibold  py-5'>Premium Quality</span>
                    <span className='text-gray-600'>Our sunglasses are crafted with the
                        finest materials and attention to detail,
                        ensuring long-lasting durability and
                        exceptional performance.
                    </span>
                </div>
                <div className='flex flex-col p-3 shadow-xl'>
                    <span className='text-xl md:text-3xl font-semibold  py-5'>Unparalleled Style</span>
                    <span className='text-gray-600'>Elevate your look with our timeless and
                        on-trend designs, perfect for any
                        occasion. Stand out from the crowd
                        with our unique and fashionable
                        sunglasses.
                    </span>
                </div>
                <div className='flex flex-col p-3 shadow-xl'>
                    <span className='text-xl md:text-3xl font-semibold  py-5'>Exceptional Comfort</span>
                    <span className='text-gray-600'>Comfort is key, and our sunglasses are
                        designed to provide a comfortable fit
                        that you can wear all day long without
                        fatigue.
                    </span>
                </div>
            </div>

            <div className='flex flex-col md:flex-row mt-8 justify-around  px-5  py-9'>
                <div className='flex-col justify-center p-2 md:w-1/2'>
                    <div className='font-bold text-2xl md:text-3xl gap-2 py-3'>What Our Customers Say</div>

                    <span className='text-gray-600 text-sm md:text-lg'>Hear from our satisfied customers and see why they love our <br />
                        premium sunglasses.</span>

                    <div className='p-3 gap-4'>
                        <div className='justify-start py-4'>
                            <div className='flex gap-2 py-3 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>

                                <span className='font-bold'>John Doe, Fashion Enthusiast</span>
                            </div>
                            <div className='text-gray-500'>
                                "These sunglasses are a game-changer! The quality is <br />
                                exceptional, and the style is unparalleled. I've received <br />
                                so many compliments since I started wearing them."
                            </div>
                            <div className='flex mt-2'>
                                <FontAwesomeIcon icon={faStar} className='text-black-500' />
                                <FontAwesomeIcon icon={faStar} className='text-black-500' />
                                <FontAwesomeIcon icon={faStar} className='text-black-500' />
                                <FontAwesomeIcon icon={faStar} className='text-black-500' />
                                <FontAwesomeIcon icon={faStar} className='text-black-500' />
                            </div>
                        </div>
                        <div className='justify-start py-4'>
                            <div className='flex gap-2 py-3 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>

                                <span className='font-bold'>Sarah Anderson, Outdoor Enthusiast</span>
                            </div>
                            <div className='text-gray-500'>
                                "I absolutely love these sunglasses! They provide <br />
                                excellent UV protection and are perfect for my active <br />
                                lifestyle. The comfort and durability are unmatched."
                            </div>
                            <div className='flex mt-2'>
                                <FontAwesomeIcon icon={faStar} className='text-black-500' />
                                <FontAwesomeIcon icon={faStar} className='text-black-500' />
                                <FontAwesomeIcon icon={faStar} className='text-black-500' />
                                <FontAwesomeIcon icon={faStar} className='text-black-500' />
                                <FontAwesomeIcon icon={faStar} className='text-gray-400' />
                            </div>
                        </div>

                    </div>

                </div>
                <div className='md:w-1/2'>
                    <img src={sunglass2} className='rounded-3xl p-2 shadow-gray-800' />
                </div>

            </div>

            <div className='flex flex-col md:flex-row justify-around p-10 bg-gray-200 gap-3 text-left '>
                <div className='p-2 m-2 md:w-1/2'>
                    <div className='font-bold text-2xl md:text-4xl mb-2'>
                        Secure and Reliable
                    </div>
                    <span className='text-gray-700 text-sm md:text-base'>We take your privacy and security seriously. Rest assured that your personal and payment information is safe with us.</span>
                </div>
                <div className='p-2 m-2 md:w-1/2'>
                    <div className='font-bold text-2xl md:text-4xl mb-2'>
                        Easy Returns
                    </div>
                    <span className='text-gray-700 text-sm md:text-base'>We stand behind the quality of our products. If you're not satisfied, you can return your purchase within 30 days for a full refund.</span>
                    <div className='flex gap-3 py-5 font-semibold'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 font-bold">
                            <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                        </svg>

                        <span className='text-gray-700'>30-day return policy</span>

                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row mt-8 justify-around  px-5  py-9'>
                <div className='flex-col justify-center p-2 md:w-1/2'>
                    <div className='font-bold text-3xl md:text-5xl gap-2 py-3 '>Elevate Your Style </div>

                    <span className='text-gray-600 text-sm md:text-lg'>Discover the perfect pair of sunglasses to complement your <br />
                        unique style and make a lasting impression.</span>
                    <div className='py-4 mt-3'>
                        <button className='bg-black font-bold text-base md:text-2xl text-white p-4 rounded-lg text-center'>Shop Now</button>
                    </div>
                </div>
                <div className='md:w-1/2 shadow-lg rounded-3xl'>
                    <img src={sunglass3} className='rounded-3xl p-2 shadow-gray-800' />
                </div>
            </div>
            <Footer />
        </div>
    )
}
