import React from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';
import CountUp, { useCountUp } from 'react-countup';


const About = () => {
    useCountUp({
        ref: 'counter',
        end: 1000,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });


    return (
        <div className='text-center mt-20 container mx-auto'>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary pb-8">About <span className="text-secondary">Us</span></h1>
            <p className="text-xl w-80 lg:w-[1000px] mx-auto text-center ">
                Launched in 2021, TinyFaces is an online design and publishing tool with a mission to empower everyone in the world to design anything and publish anywhere.
            </p>

            <div className="grid lg:grid-cols-3 my-20 place-items-center lg:place-content-center lg:place-items-center">
                <div className='lg:col-span-2 text-center lg:text-left w-80 lg:w-[900px] lg:pl-14'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, placeat. Rem assumenda accusantium unde consequatur enim repellendus, voluptatum veniam debitis error distinctio, laudantium molestias quisquam ipsa optio quibusdam maxime repellat obcaecati quia! Quisquam, nemo cupiditate quos reprehenderit velit consectetur. Quis nostrum eligendi consectetur corrupti totam maxime error architecto sequi inventore iste molestiae excepturi, porro iure consequuntur! Necessitatibus asperiores consequuntur explicabo? Dignissimos repellat sunt iure reiciendis dolorem ut est voluptatum atque nesciunt ex officiis eveniet beatae laborum pariatur velit veritatis accusamus nisi.
                    </p>
                    <div className="flex gap-3 lg:gap-10 mt-10">
                        <button className="btn btn-primary lg:w-44 text-neutral">Learn More</button>
                        <button className="btn btn-primary btn-outline lg:w-44 hover:text-neutral">Watch Video <BsFillCaretRightFill className='text-2xl' /> </button>
                    </div>

                </div>

                <div className="grid lg:grid-cols-2 gap-10 justify-items-center pt-10 lg:pt-0">
                    <div className='bg-neutral shadow-xl py-12 h-52 w-56  text-center'>


                        <CountUp start={500} end={1000}
                            enableScrollSpy
                            suffix="K"
                            className='text-5xl'
                        />
                        <p>Design<br />Created</p>
                    </div>
                    <div className=' border py-12 h-52 w-56 text-center'>
                        <p className="text-5xl mb-3">
                            <CountUp start={100} end={250}
                                enableScrollSpy
                                suffix="+"
                                className='text-5xl'
                            />
                        </p>
                        <p>International<br />Country</p>
                    </div>
                    <div className='border py-12 h-52 w-56 text-center'>
                        <p className="text-5xl mb-3">
                            <CountUp start={300} end={500}
                                enableScrollSpy
                                suffix="k"
                                className='text-5xl'
                            />
                        </p>
                        <p>Happy<br />Users</p>
                    </div>
                    <div className='border py-12 h-52 w-56 text-center'>
                        <p className="text-5xl mb-3">
                            <CountUp start={2000} end={2817}
                                enableScrollSpy
                                suffix=""
                                className='text-5xl'
                            />
                        </p>
                        <p>All Over<br />Language</p>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default About;