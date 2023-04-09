import React from 'react'
import { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'
import '../App.css'

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map((post) => <Card key={post._id}{...post} />)
    }
    return (
        <h2 className='mt-5 font-bold text-[#9e95d4] text-xl uppercase'>{title}</h2>
    )
}
const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [searchedResults, setSearchedResults] = useState(null);
    const [searchTimout, setSearchTimout] = useState(null);


    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://auroraaibackend.onrender.com/api/v1/post', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                })
                if (response.ok) {
                    const result = await response.json();
                    setAllPosts(result.data.reverse());
                }
            } catch (error3) {
                alert('error3')
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    const handleSearchChange = (e) => {
        clearTimeout(searchTimout);
        setSearchText(e.target.value);
        setSearchTimout(
            setTimeout(() => {
                const searchResults = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    item.prompt.toLowerCase().includes(searchText.toLowerCase()));

                setSearchedResults(searchResults);
            }, 500)
        );
    }
    return (
        <section className=" max-w-7xl mx-auto">
            <div>
                <h1 className=' headerText mt-16 font-extrabold text-[#ff85e9] text-[40px]'>
                    Featured Arts
                </h1>

                <p className="mt-2 text-[#97f4de] text-[16px] max-w-[500px]">
                    "Unleash your imagination with our AI-powered image generator - where pixels meet creativity!"
                </p>
            </div>
            <div className='mt-2 pb-5 rounded-md '>
                <FormField
                    labelNames="search posts"
                    type="text"
                    name="text"
                    placeholder="Search posts"
                    value={searchText}
                    handleChange={handleSearchChange}


                />
            </div>

            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 z-0 '>
                {searchText ? (
                    <RenderCards
                        data={null}
                        title="" />
                ) : (
                    <>
                        <Card _id="642321d9c56b7f9e6951867d" name="Elvin" prompt="Dark Neon girl bloom shadows rainy city fog neon green eyes."
                            photo="http://res.cloudinary.com/dxdotuxzy/image/upload/v1680024025/zqihkt8acoiuwjtpquqv.png" />
                        <Card _id="642321d9c56b7f9e6951867d" name="Elvin" prompt="Cyborg one eyed rain red velvet in hands standng next to city."
                            photo="https://res.cloudinary.com/dxdotuxzy/image/upload/v1679657551/kpjhoueacwn9ne9rxups.png" />
                        <Card _id="642321d9c56b7f9e6951867d" name="Elvin" prompt="Spongebob Squarepants in the Blair Witch Project"
                            photo="http://res.cloudinary.com/dxdotuxzy/image/upload/v1679968909/tijo5yboje9l2oculjdd.png" />
                        <Card _id="642321d9c56b7f9e6951867d" name="Elvin" prompt="Sad yellow coat boy in london rainy streets, background blur"
                            photo="https://res.cloudinary.com/dxdotuxzy/image/upload/v1679654530/y3tolaflvvzfxm4nm2sr.png" />

                        <Card _id="642321d9c56b7f9e6951867d" name="Elvin" prompt="a macro 35mm photograph of two mice in Hawaii, they are each wearing tiny swimsuits and are carrying tiny surf boards, digital art"
                            photo="https://res.cloudinary.com/dxdotuxzy/image/upload/v1679572908/nutapwrlbrrhbw8taosx.png" />

                    </>
                )
                }

            </div>

            <div className='mb-4'>
                <h1 className=' headerText2 mt-10  font-extrabold text-[40px]'>
                    Latest Releases
                </h1>
                <p className="text2 mt-2  text-[16px] max-w-[500px]">
                    "Latest releases from our community showcase of images, where creativity and inspiration come to life! "
                </p>

            </div>

            <div className='mt-18 z-0'>
                {

                    loading ? (
                        <div className='flex justify-center items-center z-0'>
                            <Loader />

                        </div>
                    ) : (
                        <>
                            {
                                searchText && (
                                    <h2 className='font-medium text-center text-[#5cf3c8] text-xl mb-3'>
                                        Showing results for <span className="text-[#5cf3c8]">
                                            {searchText}
                                        </span>
                                    </h2>
                                )
                            }
                            <div className=' grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 z-0 '>
                                {searchText ? (
                                    <RenderCards
                                        data={searchedResults}
                                        title="No search results found" />
                                ) : (
                                    <RenderCards
                                        data={allPosts}
                                        title="no posts found"
                                    />
                                )
                                }
                            </div>
                        </>
                    )
                }
            </div>
        </section >
    )
}

export default Home