import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tableau from '../components/Tableau';

import '../css/Employee-list.css';

const EmployeeList = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('employee');
        if (stored) {
            const parsed = JSON.parse(stored);
            setData(parsed); // tableau attendu
        }
    }, []);

    return (
        <div className='container'>

            <h1>Current Employees</h1>

            <Tableau data={data} />

            <Link to="/" className='link'>Home</Link>

        </div>
    );
};

export default EmployeeList;
