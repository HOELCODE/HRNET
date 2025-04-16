import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import EmployeeList from '../pages/Employee-list';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
    );
}

export default AppRouter;
