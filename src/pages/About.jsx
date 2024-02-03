import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p align="justify">At FlavorFiesta, we are passionate about creating memorable moments for our guests. Our team of talented chefs meticulously crafts each dish with the finest ingredients, infusing creativity and flavors that will tantalize your taste buds.</p>
                <p align="justify">But it's not just about the food. Our restaurant is designed to transport you to a world of comfort and relaxation. The elegant yet cozy ambiance sets the stage for an unforgettable dining experience. Whether you're celebrating a special occasion, enjoying a romantic evening, or simply catching up with friends, our restaurant provides the perfect backdrop for every moment.</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p align="justify">We pride ourselves on providing exceptional service. Our knowledgeable and friendly staff is dedicated to ensuring that your visit is nothing short of extraordinary. From the moment you step through our doors, you'll be greeted with a warm smile and personalized attention.But don't just take our word for it. Our loyal customers are the true testament to our commitment to excellence. Their continued support and positive feedback inspire us to continuously improve and exceed expectations.We invite you to join us on a culinary journey like no other. Come and experience the flavors, the ambiance, and the hospitality that make [Restaurant Name] a destination worth savoring. Whether you're a food enthusiast, a connoisseur, or simply looking for an exceptional dining experience, we look forward to welcoming you and creating memories that will last a lifetime."</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;