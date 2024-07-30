import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products', error);
        }
    };

    const handleBuyNow = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div>
            <Navbar />
            <div className='flex flex-wrap justify-around mt-4'>
                {products.map(product => (
                    <div key={product.id} className='w-full md:w-1/3 p-4'>
                        <div className='border p-4 rounded'>
                            <img src={product.image} alt={product.title} className='w-full h-64 object-cover'/>
                            <h2 className='text-lg font-bold mt-2'>{product.title}</h2>
                            <p className='text-gray-600'>${product.price}</p>
                            <button onClick={() => handleBuyNow(product)} className='mt-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300'>
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-8 rounded'>
                        <h2 className='text-2xl font-bold'>{selectedProduct.title}</h2>
                        <img src={selectedProduct.image} alt={selectedProduct.title} className='w-full h-64 object-cover mt-4'/>
                        <p className='text-lg mt-2'>${selectedProduct.price}</p>
                        <button onClick={() => setSelectedProduct(null)} className='mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300'>
                            Close
                        </button>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}
