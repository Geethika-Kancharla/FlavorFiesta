import React, { useState, useEffect } from 'react'
import { useFirebase } from '../context/Firebase';

const Table = ({ data }) => {

    // console.log(data[1].imageURL);

    const firebase = useFirebase();

    // const [url, setURL] = useState(null);

    // useEffect(() => {
    //     firebase.getImageURL(data.imageURL).then(url => setURL(url));
    // }, [])

    const [imageURLs, setImageURLs] = useState({});

    useEffect(() => {
        // Fetch image URLs for each user
        const fetchImageURLs = async () => {
            const urls = {};
            for (const user of Object.values(data)) {
                const url = await firebase.getImageURL(user.imageURL);
                urls[user.imageURL] = url;
            }
            setImageURLs(urls);
        };

        fetchImageURLs();
    }, [data, firebase]);


    return (
        <table className="table table-striped table-responsive-md h-100">
            <thead className="table-dark">
                <tr>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Date</th>
                    <th>Number of guests</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                {data && Object.values(data).map((user, index) => (
                    <tr key={index}>
                        <td>
                            {imageURLs[user.imageURL] ? (
                                <img src={imageURLs[user.imageURL]} alt="User Profile" />
                            ) : (
                                <div>Loading...</div>
                            )}
                        </td> {/* <td><img src={url} alt="User Profile" /> */}
                        <td>{user.firstName}</td>
                        <td>{user.userEmail}</td>
                        <td>{user.phoneNo}</td>
                        <td>{user.date}</td>
                        <td>{user.no}</td>
                        <td>{user.comments}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table

