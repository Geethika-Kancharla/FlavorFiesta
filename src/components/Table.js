import React from 'react'

const Table = ({ data }) => {

    // console.log(data[1].imageURL);

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
                        <td><img src={user.imageURL} alt="User Profile" /></td>
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

