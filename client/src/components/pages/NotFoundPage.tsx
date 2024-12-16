import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center p-10">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4">Sorry, the page you are looking for doesn't exist.</p>

            <button
                onClick={() => navigate("/")}
                className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
                aria-label="Go back to the homepage"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default NotFoundPage;
