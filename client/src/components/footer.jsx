import React from 'react'
import { useNavigate } from 'react-router-dom'



const footer = () => {


    return (
        <div className='bg-black'>
            <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
                <div className="text-center">
                    <h2
                        className="text-3xl font-extrabold text-white sm:text-5xl"
                    >
                        About Us
                    </h2>

                    <p className="max-w-sm mx-auto mt-4 text-gray-400 dark:text-gray-300">
                        Our team is comprised of experts in ReactJs, MongoDB and APIs, pushing the boundaries of what's possible with AI technology.
                    </p>

                    <a
                        type="button"
                        href="https://aurora-ai.vercel.app/"

                        className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white border border-indigo-600 bg-indigo-600 rounded-full hover:bg-black hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                    >

                        Get Started
                    </a>
                    <div className=' mt-4 flex justify-center content-center font-bold text-gray-400'>
                        <span className='fklex self-center'>Powered by: OpenAI</span>


                        <img src="https://img.icons8.com/nolan/256/chatgpt.png" alt="logo"
                            className='animate-spin w-10 object-contain '
                        />

                    </div>

                    <div className='flex justify-center mt-0 text-white'>

                        <a
                            href="https://github.com/ElvinPero/AuroraAI"
                            rel="noreferrer"
                            target="_blank"
                            className=" flex self-center content-center px-12 py-3 mt-8 text-sm font-medium  border border-blue-600 bg-black rounded-full hover: hover:bg-indigo-600  text-white focus:outline-none focus:ring active:bg-indigo-500"
                        >
                            <span className="mr-2 flex self-center">Github </span>
                            <span class="sr-only">GitHub</span>

                            <svg
                                className="w-6 h-6 "
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                <div
                    className="pt-8 mt-16 border-t border-indigo-700 dark:border-indigo-800 sm:flex sm:items-center sm:justify-center lg:mt-24"
                >
                    <nav aria-label="Footer Navigation - Support">
                        <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
                            <li>
                                <a
                                    href="https://openai.com/policies/terms-of-use"
                                    className="text-gray-100 transition hover:opacity-75 dark:text-gray-100"
                                >
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/ElvinPero/AuroraAI#readme"
                                    className="text-gray-100 transition hover:opacity-75 dark:text-gray-100"
                                >
                                    Usage
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://react.dev/learn"
                                    className="text-gray-100 transition hover:opacity-75 dark:text-gray-100"
                                >
                                    Docs
                                </a>
                            </li>
                        </ul>
                    </nav>


                </div>
            </div>
        </div>
    )
}

export default footer
