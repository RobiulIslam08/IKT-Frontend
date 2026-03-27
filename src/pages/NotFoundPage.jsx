import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6 py-12">
            <div className="text-center">
                {/* 404 Heading */}
                <h1 className="text-8xl md:text-[150px] font-extrabold text-primary tracking-widest drop-shadow-md">
                    404
                </h1>
                
                {/* Error Message */}
                <h2 className="mt-6 text-2xl md:text-4xl font-bold text-gray-800">
                    Oops! Page Not Found
                </h2>
                
                {/* Description */}
                <p className="mt-4 text-base md:text-lg text-gray-600 max-w-lg mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                
                {/* Back to Home Button */}
                <a 
                    href="/" 
                    className="inline-block mt-8 px-8 py-3  text-white text-lg font-semibold rounded-lg shadow-md hover:bg-primary bg-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;