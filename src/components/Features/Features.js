import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCaretRightFill, BsFillCaretLeftFill, BsArrowRight } from 'react-icons/bs';
import { RiArrowLeftFill, RiArrowRightFill } from 'react-icons/ri';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Features = () => {
    return (
        <div className='text-center mx-auto'>
            <h1 className="text-3xl lg:text-5xl font-bold">Thousand Of <span className="text-primary">Features</span><br />Awaiting for you</h1>
            <p className='w-80 lg:w-[900px] mx-auto text-xl mt-10 text-accent '>Characterised by soft lighting, vintage colour schemes and quirky costumes, these<br />generative 3D TinyFaces are the addition to your NFT collection you’ve been waiting for.</p>

            <div className="grid lg:grid-cols-3 lg:grid-flow-col mt-10 lg:mt-24 gap-10 relative lg:w-[1200px] mx-auto px-5 lg:px-0">


                <div className="card h-96  w-full bg-neutral border justify-center items-center lg:row-start-1 lg:row-span-2">
                    <figure className="mt-10 rounded-full w-24 h-24">
                        <LazyLoadImage src="https://i.ibb.co/x327wD5/Groupicon1.png" alt="Shoes" className="p-6  bg-[#0ac05f2c] " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Unique <br />TinyFaces</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                        <div className="card-actions">
                            <button className="btn btn-neutral hover:bg-neutral border-none text-primary font-normal">Find out more <BsArrowRight className='ml-3 text-2xl' /> </button>
                            {/* <p className='inline-block'><Link>Find out more <BsArrowRight /></Link></p> */}
                        </div>
                    </div>
                </div>
                <div className="card w-full h-96 bg-neutral border justify-center items-center lg:row-end-2 lg:row-span-3">
                    <figure className="mt-10 rounded-full w-24 h-24 ">
                        <LazyLoadImage src="https://i.ibb.co/Zm38M6V/groupicon2.png" alt="Shoes" className="p-6  bg-[#0ac05f2c] " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Huge<br />Special Accessories</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                        <div className="card-actions">
                            <button className="btn btn-neutral hover:bg-neutral border-none text-primary font-normal">Find out more <BsArrowRight className='ml-3 text-2xl' /> </button>

                        </div>
                    </div>
                </div>
                <div className="card lg:w-full h-96  bg-neutral border ustify-center items-center lg:row-start-1 lg:row-end-2">
                    <figure className="mt-10 rounded-full w-24 h-24 ">
                        <LazyLoadImage src="https://i.ibb.co/VJ5cZbW/groupicon3.png" alt="Shoes" className="p-6  bg-[#0ac05f2c] " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">500+<br />Combinations</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
                        <div className="card-actions">
                            <button className="btn btn-neutral hover:bg-neutral border-none text-primary font-normal">Find out more <BsArrowRight className='ml-3 text-2xl' /> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recently container mx-auto mt-10 lg:mt-0">
                <h1 className="text-4xl lg:text-5xl text-primary font-semibold">Recently <span className='text-secondary'> Added</span></h1>
                <p className='w-80 lg:w-[900px] mx-auto text-xl mt-10 text-accent '>Characterised by soft lighting, vintage colour schemes and quirky costumes, these<br />generative 3D TinyFaces are the addition to your NFT collection you’ve been waiting for.</p>

                <div className="grid lg:grid-cols-3 gap-5 lg:gap-0 justify-items-center mt-14">
                    <LazyLoadImage src="https://i.ibb.co/P9f7Jyw/redface.png" alt="img2" border="0" className='bg-[#D9B7B4]  h-96  rounded-xl px-2' />
                    <LazyLoadImage src="https://i.ibb.co/TgnrVQj/blueface.png" alt="img2" border="0" className='bg-[#B7B5D9] h-96  rounded-xl px-2' />
                    <LazyLoadImage src="https://i.ibb.co/5FKy1V3/img1.png" alt="img2" border="0" className='bg-[#D2E4E5] h-96 pt-10 rounded-xl px-2 ' />
                </div>

                <div className=" bg-neutral p-2 mt-5 w-32 flex justify-center items-center shadow-sm mx-auto">
                    <p className="p-4 bg-neutral text-secondary text-xl "><RiArrowLeftFill /></p>
                    <p className="p-4 bg-primary text-neutral text-xl "><RiArrowRightFill /></p>
                </div>


                <div className="hero min-h-64 bg-base-100 mt-20">
                    <div className="grid lg:grid-cols-3 gap-8 justify-items-start   ">
                        <div className='text-left lg:col-span-2 grid place-content-center content-center'>
                            <h1 className="text-3xl lg:text-5xl font-bold text-primary">5000+ <span className="text-secondary">Unique TinyFaces</span> </h1>
                            <p className="py-6 w-80 lg:w-[800px] text-xl text-accent">
                                Each character is entirely unique and is generated by combining hundreds of attributes such as colour palettes, skin tones, facial traits, outfits and accessories. With nearly endless combinations, all characters are guaranteed to be one of a kind.
                            </p>
                        </div>
                        <LazyLoadImage src="https://i.ibb.co/wYc5sHD/blackface.png" className="max-w-sm lg:max-w-md bg-[#DADADA] rounded-tl-[40%] px-2 pt-10 col-span-1" />

                    </div>
                </div>

                <div className="hero min-h-64 bg-base-100 mt-20">
                    <div className="grid lg:grid-cols-3 gap-8 justify-items-start lg:justify-items-end   ">

                        <LazyLoadImage src="https://i.ibb.co/vvkHhDZ/longhair.png" className="max-w-sm lg:max-w-md bg-[#EEE5EC] rounded-tl-[40%] px-5 pt-10 lg:col-span-1" />

                        <div className='text-left lg:col-span-2 grid place-content-center content-center'>
                            <h1 className="text-3xl lg:text-5xl font-bold text-primary">Secure <span className="text-secondary">The Most Rare</span> </h1>
                            <p className="py-6 w-80 lg:w-[900px] text-xl text-accent">
                                Each character is entirely unique and is generated by combining hundreds of attributes such as colour palettes, skin tones, facial traits, outfits and accessories. With nearly endless combinations, all characters are guaranteed to be one of a kind.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;