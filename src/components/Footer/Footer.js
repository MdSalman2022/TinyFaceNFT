import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BiCopyright } from 'react-icons/bi';


const Footer = () => {
    return (
        <footer className="ml-2 lg:mx-10 bg-base-100 py-10 ">
            <div className="container lg:mx-auto footer text-neutral-content lg:pl-28 lg:my-20">
                <div>
                    <span className=" text-lg font-semibold text-secondary">TinyFaces.NFT</span>
                    <a className="link link-hover">Nor again is there anyone who loves or<br />pursues or desires to obtain pain of itself.</a>
                </div>
                <div>
                    <span className=" text-lg font-semibold text-secondary">About</span>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Reviews</a>
                    <a className="link link-hover">Stories</a>
                </div>
                <div>
                    <span className=" text-lg font-semibold text-secondary">Privacy</span>
                    <a className="link link-hover">Privacy</a>
                    <a className="link link-hover">Policy</a>
                    <a className="link link-hover">Payment</a>
                    <a className="link link-hover">Terms</a>
                </div>
                <div>
                    <span className="text-lg font-semibold text-secondary">Contact Us</span>
                    <a className="link link-hover">+91 88188 75275</a>
                    <a className="link link-hover text-xs">mehedi.salman102@gmail.com</a>
                    <a className="link link-hover hidden lg:flex">
                        <p className='grid grid-cols-2 lg:flex gap-5 text-4xl mt-10'>
                            <FaInstagram className="bg-primary text-neutral p-2 rounded-lg" />
                            <FaLinkedinIn className="bg-primary text-neutral p-2 rounded-lg" />
                            <FaFacebookF className="bg-primary text-neutral p-2 rounded-lg" />
                            <FaTwitter className="bg-primary text-neutral p-2 rounded-lg" /></p>
                    </a>
                </div>
                <div className="lg:hidden col-span-2 mb-10">
                    <a className="link link-hover">
                        <p className='grid grid-cols-4 justify-items-end lg:flex gap-5 text-4xl mt-10'>
                            <FaInstagram className="bg-primary text-neutral p-2 rounded-lg" />
                            <FaLinkedinIn className="bg-primary text-neutral p-2 rounded-lg" />
                            <FaFacebookF className="bg-primary text-neutral p-2 rounded-lg" />
                            <FaTwitter className="bg-primary text-neutral p-2 rounded-lg" /></p>
                    </a>
                </div>
            </div>

            <div className="container mx-auto  lg:pl-28">
                <hr />
                <p className='mt-5 flex lg:flex-nowrap flex-wrap gap-2 items-center'><BiCopyright /> Copyright 2022 <span className="font-semibold">TinyFaces.NFT</span> All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;