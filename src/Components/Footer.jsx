import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mx-auto w-11/12">
                <aside>
                    <Logo></Logo>
                    <p>
                        You imagination make it real.
                        <br />
                        Providing reliable tech since 2023
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside className='w-11/12 mx-auto'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by shDeco Ltd.</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;