import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-8 px-5 justify-around">
            <div className="container mx-auto flex justify-between items-start px-6 md:flex-row flex-col">
                <div className="mb-6 md:mb-0">
                    <h2 className="flex items-center text-gray-800 text-2xl font-bold mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                        </svg>

                        Acme Co.
                    </h2>
                    <p className="text-gray-600">Elevate your style with our premium sunglasses.</p>
                </div>

                <div className="mb-6 md:mb-0">
                    <h2 className="text-gray-800 text-lg font-bold mb-2">Quick Links</h2>
                    <ul className="text-gray-600">
                        <li className="mb-2"><a href="#">Home</a></li>
                        <li className="mb-2"><a href="#">About</a></li>
                        <li className="mb-2"><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="mb-6 md:mb-0">
                    <h2 className="text-gray-800 text-lg font-bold mb-2">Legal</h2>
                    <ul className="text-gray-600">
                        <li className="mb-2"><a href="#">Terms of Service</a></li>
                        <li className="mb-2"><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-gray-800 text-lg font-bold mb-2">Contact Us</h2>
                    <p className="text-gray-600">Email: info@acmeco.com</p>
                    <p className="text-gray-600">Phone: 1-800-123-4567</p>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-300 pt-6 text-center">
                <p className="text-gray-600">&copy; 2024 Acme Co. All rights reserved.</p>
            </div>
        </footer>
    );
}
