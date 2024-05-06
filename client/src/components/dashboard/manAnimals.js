import React from "react";
import DefaultSidebar from "./sidebar";
import { useFetchQestion } from "../../hooks/FetchQuestion";
import withAuth from "../../helper/helper";


const ManAnimals = () => {


    const [data, setData, handleDelete] = useFetchQestion();

    if (data.isLoading) {
        return <div>Loading...</div>;
    }

    if (data.serverError) {
        return <div>Error: {data.serverError}</div>;
    }


    return (
        <div className="flex h-screen ">
            <DefaultSidebar />

            <div className="flex w-full flex-col">
                <div className="bg-gray-100 p-4 sticky top-0">
                    <div className="text-center">Animal Quiz</div>
                </div>

                <div className="flex-1 p-4 overflow-y-auto">

                    <div className=" m-5 pt-3 w-full p-4 text-center bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-8">

                        <form className="w-full mx-auto">

                            {data.apiData.map((question, index) => (
                                
                                <div key={index} className="input-group">

                                    <label htmlFor="Question" className="block mb-2 text-sm font-medium text-gray-900">
                                        Question {index + 1}
                                        ...
                                        <button className="bg-red-700 my-3hover:bg-red-500 text-white font-bold py-2 px-4 rounded float-end"   onClick={() => handleDelete(question.id)}>
                                            Delete
                                        </button>

                                    </label>
                                    
                                    <textarea
                                        id="Question"
                                        rows="4"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        {question.question}
                                    </textarea>

                                    <div className="grid grid-cols-4 gap-4 p-3">
                                        {question.options.map((option, optionIndex) => (
                                            <div key={optionIndex} className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                                <input
                                                    id={optionIndex}
                                                    type="radio"
                                                    value={option}
                                                    name={`question-${index}`}
                                                    checked={data.answers[index] === optionIndex}
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900">
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>

                                    <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                                </div>
                            ))}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(ManAnimals);