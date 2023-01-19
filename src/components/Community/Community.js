import React from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Community = () => {
    return (
        <div className="w-80 lg:w-[1300px] mx-auto full bg-[#F6F6F6] rounded-br-3xl rounded-tl-full lg:rounded-b-full ">
            <div className="hero min-h-80 lg:min-h-64 mt-20 ">
                <div className="grid lg:grid-cols-3 gap-3 lg:gap-8 lg:justify-items-start">

                    <LazyLoadImage src="https://i.ibb.co/j4CLHFx/greenface.png" className="max-w-xs lg:max-w-md bg-[#DAF6E7] rounded-tl-[40%] lg:px-5 lg:pt-10 lg:col-span-1" />

                    <div className='flex flex-col lg:col-span-2 lg:place-content-center '>
                        <div className='text-left lg:col-span-2  lg:ml-32'>
                            <h1 className="text-3xl lg:text-5xl font-bold text-secondary px-2">Join The <span className="text-primary">Community</span> </h1>
                            <p className="py-6 px-2  w-80 lg:w-[500px] grid justify-items-center text-xl text-accent">
                                We’re still hiding in the metaverse. While you wait for the collection to drop, join our Discord channel or follow us on Twitter keep up to date with our latest work and announcements.
                            </p>


                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 pb-5 lg:gap-10 lg:ml-32">
                            <button className="btn btn-primary w-44 text-neutral">Learn More</button>
                            <button className="btn btn-primary w-44 btn-outline  hover:text-white">Watch Video <BsFillCaretRightFill /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;