import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css';
import Person1 from '../utils/img/person1.jpg';
import Person2 from '../utils/img/person2.jpg';
import Person3 from '../utils/img/person3.jpg';
import Person4 from '../utils/img/person4.jpg';

export function Reviews() {
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText align="justify">
                                    "I had the most amazing dining experience at FlavorFiesta.The food was absolutely delicious, full of flavors that danced on my palate. The presentation was impeccable, and the service was top-notch.The ambiance was elegant yet cozy, creating the perfect setting for a memorable evening. I highly recommend for anyone looking for a truly exceptional dining experience."
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">John Mike</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText align="justify">
                                    "I had the pleasure of dining at FlavorFiesta for a business dinner, and I must say, it was an impressive experience. The menu showcased a range of culinary delights, and the flavors were outstanding. The service was professional and efficient, ensuring that our evening flowed seamlessly. The restaurant's elegant ambiance provided the ideal backdrop for a successful business meeting. I highly recommend for anyone looking to impress clients or enjoy a sophisticated dining experience."
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Maria Cruz</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText align="justify">
                                    "FlavorFiesta has become my go-to place for a delightful brunch experience. The menu offers a great selection of both classic and innovative dishes that cater to all tastes. The quality of the ingredients is evident in every bite. The staff is friendly and attentive, making sure that every visit is enjoyable. The cozy atmosphere and beautiful decor make it the perfect spot to relax and catch up with friends.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Anna Gold</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText align="justify">
                                    "The menu offered a diverse range of dishes, each one bursting with flavor. I opted for the chef's tasting menu, and every course was a delightful surprise. The attention to detail in the presentation was remarkable, making each dish a work of art.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-success">Nick Burn</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}