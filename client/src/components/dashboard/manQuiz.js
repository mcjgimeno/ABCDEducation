import React from "react";
import DefaultSidebar from "./sidebar";
import withAuth from "../../helper/helper";

const ManQuiz = () => {
    return (
        <div className="flex h-screen">
            <DefaultSidebar />
            <div className="flex w-full flex-col">
                <div className="bg-gray-100 p-4">Dashboard</div>

                <div className="flex-1 p-4">
                    <div className= " m-5 pt-3 w-full p-4 text-center bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-8">
                        <h5 className="mb-2 text-3xl font-bold text-gray-900">Animals</h5>
                        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">View and modify the quiz</p>
                    </div>
                </div>

                <div className="flex-1 p-4">
                    <div className= " m-5 pt-3 w-full p-4 text-center bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-8">
                        <h5 className="mb-2 text-3xl font-bold text-gray-900">Math</h5>
                        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">View and modify the quiz</p>
                    </div>
                </div>

                <div className="flex-1 p-4">
                    <div className= " m-5 pt-3 w-full p-4 text-center bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-8">
                        <h5 className="mb-2 text-3xl font-bold text-gray-900">Alphabet</h5>
                        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">View and modify the quiz</p>
                    </div>
                </div>

                <div className="flex-1 p-4">
                    <div className= " m-5 pt-3 w-full p-4 text-center bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-8">
                        <h5 className="mb-2 text-3xl font-bold text-gray-900">Shapes</h5>
                        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">View and modify the quiz</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(ManQuiz);