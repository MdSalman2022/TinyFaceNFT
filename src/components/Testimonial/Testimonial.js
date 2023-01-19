import React from 'react';
import { FaStar } from 'react-icons/fa';
import { RiDoubleQuotesR, RiArrowLeftFill, RiArrowRightFill } from 'react-icons/ri';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Testimonial = () => {
    return (
        <div className='testimonial container min-h-screen mx-auto text-center relative'>

            <div className="rounded-full absolute hidden lg:flex lg:top-14 lg:left-44 mt-10 lg:mt-0">
                <div className="avatar">
                    <div className="w-24 lg:w-40 rounded-full">
                        <LazyLoadImage src="https://i.ibb.co/s98WyPL/user1.png" />
                    </div>
                </div>
            </div>
            <div className="rounded-full absolute hidden lg:flex  lg:top-72 lg:left-10">
                <div className="avatar">
                    <div className="w-24 lg:w-40 rounded-full">
                        <LazyLoadImage src="https://i.ibb.co/XWg4XdY/user3.png" />
                    </div>
                </div>
            </div>
            <div className="rounded-full absolute hidden lg:flex lg:bottom-40 lg:left-44">
                <div className="avatar">
                    <div className="w-24 lg:w-40 rounded-full">
                        <LazyLoadImage src="https://i.ibb.co/HpzQm8G/user5.png" />
                    </div>
                </div>
            </div>

            <div className="rounded-full absolute hidden lg:flex lg:top-14 lg:right-44">
                <div className="avatar">
                    <div className="w-24 lg:w-40 rounded-full">
                        <LazyLoadImage src="https://i.ibb.co/tZbjtst/user2.png" />
                    </div>
                </div>
            </div>
            <div className="rounded-full absolute hidden lg:flex lg:top-80 lg:right-10">
                <div className="avatar">
                    <div className="w-24 lg:w-40 rounded-full">
                        <LazyLoadImage src="https://i.ibb.co/XSTbkM3/user4.png" />
                    </div>
                </div>
            </div>
            <div className="rounded-full absolute hidden lg:flex lg:bottom-40 lg:right-44">
                <div className="avatar">
                    <div className="w-24 lg:w-40 rounded-full">
                        <LazyLoadImage src="https://i.ibb.co/BZ9dbPs/user6.png" />
                    </div>
                </div>
            </div>



            <h1 className="text-2xl lg:text-6xl font-bold pb-5">What our <span className="text-primary">Users Say</span></h1>
            <p className="text-2xl w-80 lg:w-[1000px] mx-auto text-center font-thin">
                Community development is often linked with community work or<br />community planning, and may involve stakeholders, foundations,
            </p>

            <div className="lg:hidden avatar-group -space-x-24 mt-10 w-80 mx-auto">
                <div className="avatar">
                    <div className="w-40 z-[100]">
                        <img src="https://i.ibb.co/s98WyPL/user1.png" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-40 z-[100]">
                        <img src="https://i.ibb.co/tZbjtst/user2.png" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-40 z-[100]">
                        <img src="https://i.ibb.co/XWg4XdY/user3.png" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-40 z-[100]">
                        <img src="https://i.ibb.co/XSTbkM3/user4.png" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="w-40 z-[100]">
                        <img src="https://i.ibb.co/HpzQm8G/user5.png" />
                    </div>
                </div>

                <div className="avatar">
                    <div className="w-40 z-[100]">
                        <img src="https://i.ibb.co/BZ9dbPs/user6.png" />
                    </div>
                </div>

            </div>

            <div className="stack my-2 lg:my-10 relative">

                <div className="quotation text-neutral text-5xl absolute top-6 left-32 lg:top-3 lg:left-60 ">
                    <p className='bg-primary p-1  rounded-full w-14 h-14 ring-neutral ring-offset-2 ring shadow-lg lg:shadow-2xl'><RiDoubleQuotesR /></p>
                </div>
                <div className="text-left leading-7  border-base-content card w-80 lg:w-[550px] p-6 my-6 bg-neutral shadow-lg lg:shadow-2xl">
                    <div className="card-body">
                        <div className="icons flex gap-1 text-md text-warning"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>

                        <p>
                            Yet preference connection unpleasant yet melancholy but end appearance. And excelence partiality estimating terminated day everything.
                        </p>
                        <div className='leading-6 mt-5'>
                            <p className="font-bold">Sam</p>
                            <p className='text-sm'>@Migelko</p>
                        </div>
                    </div>
                </div>
                <div className=" card w-80 lg:w-[550px] h-[50px] pt-5 bg-base-100 shadow-lg"></div>
            </div>
            <div className=" bg-neutral p-2 mt-24 w-32 flex justify-center items-center shadow-sm mx-auto">
                <p className="p-4 bg-neutral text-secondary text-xl "><RiArrowLeftFill /></p>
                <p className="p-4 bg-primary text-neutral text-xl "><RiArrowRightFill /></p>
            </div>
        </div>
    );
};

export default Testimonial;