import React from 'react';

const TestComponent = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Tailwind Test Component</h2>
            <p className="text-gray-700 mb-4">This component is styled with Tailwind CSS</p>
            <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Blue Button
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Green Button
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Red Button
                </button>
            </div>
            <div className="test-tailwind mt-4">
                This div uses the custom .test-tailwind class from our CSS
            </div>
        </div>
    );
};

export default TestComponent; 