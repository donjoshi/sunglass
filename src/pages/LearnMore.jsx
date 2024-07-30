import React from 'react';
import Navbar from '../components/navbar';
import placeholderImage from './placeholderImage.jpeg'; // Make sure to replace this with the actual image path

export default function LearnMore() {
    return (
        <div className=''>
            <Navbar />
            <div className="flex flex-col md:flex-row items-center justify-around bg-gray-100 py-12 px-6">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <h2 className="text-4xl font-bold mb-4">About Acme Co.</h2>
                    <p className="text-gray-600 mb-4">
                        Acme Co. is a leading provider of premium sunglasses, dedicated to delivering exceptional quality and style. Founded in 2010, we have built a reputation for crafting meticulously designed eyewear that combines fashion and functionality.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Our team of passionate designers and engineers work tirelessly to ensure that every pair of Acme sunglasses exceeds our customers' expectations. We believe that the right pair of sunglasses can transform your look and enhance your overall experience, whether you're exploring the great outdoors or navigating the bustling city streets.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <img src={placeholderImage} alt="About Acme Co." className="rounded-md shadow-lg size-5/12" />
                </div>
            </div>
        </div>
    );
}
