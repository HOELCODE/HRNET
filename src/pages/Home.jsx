import { Link } from "react-router-dom";
import { useState } from "react";
import '../css/Home.css';

import states from '../data/Data.js';

const Home = () => {

    const [employee, setEmployee] = useState({
        FirstName: '',
        LastName: '',
        BirthDate: '',
        StartDate: '',
        Street: '',
        City: '',
        State: '',
        ZipCode: '',
        department: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]: value
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const employeeList = JSON.parse(localStorage.getItem('employee')) || [];

        const updatedList = [...employeeList, employee];
        localStorage.setItem('employee', JSON.stringify(updatedList));

        // (Optionnel) Réinitialiser le formulaire
        setEmployee({
            FirstName: '',
            LastName: '',
            BirthDate: '',
            StartDate: '',
            Street: '',
            City: '',
            State: '',
            ZipCode: '',
            department: ''
        });
    };

    return (
        <div className="home-container">
            <h1>HRnet</h1>
            <Link to="/employee-list">
                View Current Employees
            </Link>
            <h2>Create Employee</h2>
            <div className="htmlForm-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" name="FirstName" onChange={handleChange} required></input>

                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" name="LastName" onChange={handleChange} required></input>

                    <label htmlFor="BirthDate">Date of Birth</label>
                    <input type="date" name="BirthDate" onChange={handleChange} required></input>

                    <label htmlFor="StartDate">Start Date</label>
                    <input type="date" name="StartDate" onChange={handleChange} required></input>

                    <div className="separateur"></div>

                    <div className="adress-container">
                        <span>Address</span>
                        <label htmlFor="Street">Street</label>
                        <input type="text" name="Street" onChange={handleChange} required></input>

                        <label htmlFor="City">City</label>
                        <input type="text" name="City" onChange={handleChange} required></input>

                        <label htmlFor="State">State</label>
                        <select name="State" id="State" onChange={handleChange}>
                            {states.map((state, index) => (
                                <option key={index} value={state.abbreviation}>{state.name}</option>
                            ))}
                        </select>

                        <label htmlFor="ZipCode">Zip Code</label>
                        <input type="number" name="ZipCode" onChange={handleChange} required></input>
                    </div>

                    <div className="separateur"></div>

                    <label htmlFor="department">Departement</label>
                    <select name="department" id="department" onChange={handleChange} required>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>


                    <div className="separateur"></div>

                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}

export default Home;