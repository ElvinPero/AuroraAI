import React from 'react'
import { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'
const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map((post) => <Card key={post._id}{...post} />)
    }
    return (
        <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
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
                const response = await fetch('http://localhost:8081/api/v1/post', {
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
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className=' mt-20 font-extrabold text-[#ff85e9] text-[32px]'>AI Image Wizard</h1>
                <p className="mt-2 text-[#ff85e9] text-[16px] max-w-[500px]">
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
                                    <h2 className='font-medium text-center text-[#222328] text-xl mb-3'>
                                        Showing results for <span className="text-[#222328]">
                                            {searchText}
                                        </span>
                                    </h2>
                                )
                            }
                            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 z-0'>
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
        </section>
    )
}

export default Home