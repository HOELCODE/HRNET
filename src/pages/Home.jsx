import { Link } from "react-router-dom";
import '../css/Home.css';

import states from '../data/Data.js';

const Home = () => {
    return (
        <div className="home-container">
            <h1>HRnet</h1>
            <Link to="/employee-list">
                View Current Employees
            </Link>
            <h2>Create Employee</h2>
            <div className="htmlForm-container">
                <form>
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" name="FirstName"></input>

                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" name="LastName"></input>

                    <label htmlFor="BirthDate">Date of Birth</label>
                    <input type="date" name="BirthDate"></input>

                    <label htmlFor="StartDate">Start Date</label>
                    <input type="date" name="StartDate"></input>

                    <div className="separateur"></div>

                    <div className="adress-container">
                        <span>Address</span>
                        <label htmlFor="Street">Street</label>
                        <input type="text" name="Street"></input>

                        <label htmlFor="City">City</label>
                        <input type="text" name="City"></input>

                        <label htmlFor="State">State</label>
                        <select name="State" id="State">
                            {states.map((state, index) => (
                                <option key={index} value={state.abbreviation}>{state.name}</option>
                            ))}
                        </select>

                        <label htmlFor="ZipCode">Zip Code</label>
                        <input type="number" name="ZipCode"></input>
                    </div>

                    <div className="separateur"></div>

                    <label htmlFor="department">Departement</label>
                    <select name="department" id="department">
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