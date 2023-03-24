import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'
const CreatePost = () => {
    const Navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: ''
    })
    const [generatingImg, setGeneratingImg] = useState(false);

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({ ...form, prompt: randomPrompt })
    }


    const generateImage = async () => {
        if (form.prompt) {
            try {
                setGeneratingImg(true);
                const response = await fetch('https://auroraaibackend.onrender.com/api/v1/dalle', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ prompt: form.prompt }),
                })
                const data = await response.json();
                setForm({
                    ...form, photo: `data:image/jpeg;base64,${data.photo}`
                })
            } catch (error) {
                alert(error);
            } finally {
                setGeneratingImg(false);
            }
        } else {
            alert('Please enter a prompt');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.prompt && form.photo) {
            setLoading(true);
            try {
                const response = await fetch('https://auroraaibackend.onrender.com/api/v1/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                })

                await response.json();
                Navigate('/');
            } catch (err) {
                alert(err);
            } finally {
                setLoading(false);
            }
        } else {
            alert('Please enter a prompt and generate an image')
        }
    }


    return (
        <section className='max-w-7xl mx-auto'>
            <div className="mt-20">
                <h1 className=' font-extrabold text-[#34ffb8] text-[32px]'>Create</h1>
                <p className="mt-2 text-[#89ffd6] text-[16px] max-w-[500px]">
                    Creating AI rendered images through AURORA
                </p>
            </div>
            <form className='mt-3 max-w-3xl' onSubmit={handleSubmit}>
                <div className=' text-[#89ffd6] flex flex-col gap-5'>
                    <FormField
                        labelName="Your Name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        handleChange={handleChange}
                    />
                    <FormField
                        labelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder="teddy bears shopping for groceries in Japan, ukiyo-e"
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />
                    <div className='relative bg-gray-50 border border-gray-300 
                        text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 w-64 p-3
                        h-64 flex justify-center items-center
                    '>
                        {form.photo ? (
                            <img src={form.photo} alt="form.prompt"
                                className='w-full h-full object-contain' />
                        ) : (
                            <img
                                src={preview}
                                alt="preview"
                                className="w-9/12 h-9/12 object-contain opacity-50 blur-sm "
                            />
                        )}
                        {
                            generatingImg && (
                                <div className="absolute inset-0 z-0 flex
                                justify-center items-center bg-[rgba(0,0,0,0.5)]
                                rounded-lg
                                ">
                                    <Loader />
                                </div>
                            )
                        }
                    </div>
                </div>
                <div>
                    <span className='empty-5 flex gap-5'>
                        <button className='font-extrabold text-black mt-1 text-[15px] textw-extrabold bg-[#1effb0] bg-700  rounded-md test-sm w-full sm:will-change-auto px-5 py-2.5 text-center'
                            type="button"
                            onClick={generateImage}
                        >
                            {generatingImg ? 'Generating...' : 'Generate'}

                        </button>
                    </span>
                    <span className='mt-10'>

                        <button className='mt-2  text-white bg-blue-500 font-extrabold rounded-md text-m md-w-10 py-3 px-4 sm-w-full'
                            type="submit">
                            {loading ? 'Sharing..' : 'Share'}
                        </button>


                    </span>
                    <p className='mt-2 text-[#89ffd6]  text-[14px]'>Share your creation on Generation.hub. Behold the magic of language modeling as we transform your words into intelligent and informative responses through AI generated images</p>
                </div>
            </form>
        </section>
    );
}

export default CreatePost
