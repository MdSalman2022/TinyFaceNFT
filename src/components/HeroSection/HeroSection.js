import React from 'react';
import { FaPlay } from 'react-icons/fa';
import CountUp, { useCountUp } from 'react-countup';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const HeroSection = () => {


    useCountUp({
        ref: 'counter',
        end: 1000,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });



    return (
        <div className="hero min-h-[700px] h-full container mx-auto mb-24 bg-base-100">
            <div className="grid lg:grid-cols-3 px-2 lg:px-0">
                <div className='col-span-2 grid place-content-center content-center'>
                    <h1 className="text-5xl lg:text-7xl font-bold text-primary">Find <span className="text-secondary">Your Favourite</span> Character</h1>
                    <p className="py-6 w-96 lg:w-[600px] text-left text-lg">Characterised by soft lighting, vintage colour schemes and <br /> quirky costumes, these generative 3D TinyFaces are the <br /> addition to your NFT collection you’ve been waiting for.</p>
                    <div className="flex gap-3 mt-10">
                        <button className="btn btn-primary text-neutral w-44 font-normal">Join Discord</button>
                        <div className="demo flex relative w-52">
                            <button className="btn border-none bg-base-100 z-[100] text-primary">Demo video</button>
                            <p className='absolute right-7 -top-6 p-10 border-2 rounded-full border-dashed text-primary border-primary'> <FaPlay /></p>
                        </div>
                    </div>
                </div>
                <div className="relative  mt-10 lg:mt-0">
                    <LazyLoadImage
                        src="https://i.ibb.co/5FKy1V3/img1.png"
                        height="512px"
                        width="560px"
                        alt="img1"
                        loading='lazy'
                        effect=''
                        className="max-w-sm lg:max-w-lg bg-[#DFF5E9] rounded-tr-[40%] rounded-b-2xl px-2 pt-10"
                    />
                    <div className="uppertab absolute top-10 left-10 border-2 border-neutral rounded-2xl">

                        <div className="flex items-center  bg-base-100 bg-opacity-60 w-64 p-5 rounded-xl relative shadow-lg">
                            <span className="indicator-item badge badge-primary border-[6px] h-7 p-2 border-white rounded-full absolute -left-4 -top-4 shadow-lg"></span>
                            <p className='text-5xl mr-5 text-error '>
                                <CountUp start={150} end={202}
                                    enableScrollSpy
                                    suffix="K"
                                    className='text-5xl'
                                />
                            </p>
                            <div className='leading-4'>
                                <p>Unique</p>
                                <p>TinyFaces</p>
                            </div>
                        </div>
                    </div>
                    <div className="lowertab absolute bottom-3 right-5 border-2 border-neutral rounded-lg">
                        <div className="flex flex-col gap-5 items-center  bg-base-100 bg-opacity-60 w-44 h-48 py-5 rounded-lg relative shadow-lg text-center">
                            {/* <span className="indicator-item badge badge-primary border-[6px] h-7 p-2 border-white rounded-full absolute -right-4 -top-4 shadow-lg"></span> */}
                            <div className="avatar w-10 absolute -right-4 -top-4">
                                <div className="w-24 rounded-full ring ring-neutral  ">
                                    <LazyLoadImage src="https://i.ibb.co/0rgVFNb/Ellipse-605heroicon-1.png" alt='heroicon' />
                                </div>
                            </div>
                            <p className='text-lg font-semibold'>Secure The <br /> Most Rare</p>
                            <div className='bg-white mx-5 w-40 px-3 py-5 rounded-lg'>
                                <p className='text-error text-2xl font-semibold'>
                                    <CountUp start={2000} end={3000}
                                        enableScrollSpy
                                        suffix="+"
                                    />
                                </p>
                                <p className='text-xs'>New Tiny Faces Arrives</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;