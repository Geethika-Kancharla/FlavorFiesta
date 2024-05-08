import React from 'react';
import { MenuBtn } from '../components/MenuBtn';
import './Home.css';
import AboutImg from '../utils/img/about-img.jpg';
import { Link } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import ContactImage from '../utils/img/contact-img.jpg';


function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 text-yellow fw-bold'>Welcome To</h2>
                            <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>FlavorFiesta</h1>
                            <MenuBtn />
                        </div>
                    </div>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-50' alt="about img" />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p align="justify">At FlavorFiesta, we are passionate about creating memorable moments for our guests. Our team of talented chefs meticulously crafts each dish with the finest ingredients, infusing creativity and flavors that will tantalize your taste buds.</p>
                        <p className='mb-5' align="justify">But it's not just about the food. Our restaurant is designed to transport you to a world of comfort and relaxation. The elegant yet cozy ambiance sets the stage for an unforgettable dining experience. Whether you're celebrating a special occasion, enjoying a romantic evening, or simply catching up with friends, our restaurant provides the perfect backdrop for every moment.</p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-success btn-lg'>More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="menu-section py-5 text-light shadow">
                <div className="container d flex flex-column align-items-center">
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favourites</h2>
                    <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Food</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>English Breakfast</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>Rs110</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Mexican Pizza</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>Rs160</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Spaghetti</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>Rs95</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Drinks</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Coffee</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>Rs40</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Juice</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>Rs45</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Spirits</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>Rs45</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <MenuBtn />
                </div>
            </div>
            <ImageGallery />

            <div className='bg-dark text-light py-5 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Home;