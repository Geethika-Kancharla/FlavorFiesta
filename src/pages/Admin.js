import React, { useState, useEffect } from 'react'
import { useFirebase } from '../context/Firebase'
import Table from '../components/Table';

const Admin = () => {

    const firebase = useFirebase();

    firebase.fetchData();

    console.log(firebase.data);

    return (
        <div className='admin-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h2 className='text-success my-4'>Admin Page</h2>
                </div>
            </header>

            <div className='container'>

                {firebase.data && (
                    <Table
                        data={firebase.data}
                    />
                )}

            </div>
        </div>
    )
}

export default Admin