import React, { useState } from 'react';
import './Contact.css';
import { ContactInfo } from '../components/ContactInfo';
import { Form } from 'react-bootstrap';
import { Reviews } from '../components/Reviews';
import { useFirebase } from '../context/Firebase';

function Contact() {

    const firebase = useFirebase();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [date, setDate] = useState();
    const [no, setNo] = useState();
    const [comments, setComments] = useState();
    const [profile, setProfile] = useState(undefined);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await firebase.handleAddUserData(firstName, lastName, email, phoneNo, date, no, comments, profile);
        alert("Successfully booked");
        setFirstName('');
        setLastName('');
        setEmail();
        setPhoneNo('');
        setDate('');
        setNo('');
        setComments('');
        setProfile(undefined);
    }

    const handleFileChange = (e) => {
        setProfile(e.target.files[0]);
    };

    return (
        <div className='contact-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Contact</h1>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <ContactInfo />
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='first-name'>First Name</Form.Label>
                                    <Form.Control type='text' id='first-name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='last-name'>Last Name</Form.Label>
                                    <Form.Control type='text' id='last-name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='email-address'>Email Address</Form.Label>
                                    <Form.Control type='email' id='email-address' value={firebase.user.email} onChange={(e) => setEmail(e.target.value)} readOnly />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='phone-number'>Phone Number</Form.Label>
                                    <Form.Control type='tel' id='phone-number' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='date'>Date</Form.Label>
                                    <Form.Control type='date' id='date' value={date} onChange={(e) => setDate(e.target.value)} />
                                </div>
                                <div className='col-md-6'>
                                    <Form.Label htmlFor='guests-number'>Number Of Guests</Form.Label>
                                    <Form.Control type='number' id='guests-number' value={no} onChange={(e) => setNo(e.target.value)} />
                                </div>
                            </Form.Group>
                            <Form.Group className='mb-4'>
                                <Form.Label htmlFor='comments'>Comments</Form.Label>
                                <Form.Control type='textarea' id='comments' value={comments} onChange={(e) => setComments(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupImage">
                                <Form.Label>Profile(Optional)</Form.Label>
                                <Form.Control type="file" placeholder="Upload Profile" onChange={handleFileChange} />
                            </Form.Group>

                            <button type='submit' className='btn btn-success btn-lg'>Submit</button>
                        </Form>
                    </div>
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <Reviews />
            </div>
        </div>
    )
}
export default Contact;