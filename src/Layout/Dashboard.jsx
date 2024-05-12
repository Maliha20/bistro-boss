import { FaEnvelope, FaGamepad, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-purple-200">
                <ul className="toys p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome className="mt-2"></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaGamepad className="mt-2"></FaGamepad>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList className="mt-2"></FaList>
                                    Manage Items</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers className="mt-2"></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome className="mt-2"></FaHome>
                                        User Home</NavLink>
                                </li>
                        
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart className="mt-2"></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList className="mt-2"></FaList>
                                        Real Payment History</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome className="mt-2"></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/dolls">
                            <FaSearch className="mt-2"></FaSearch>
                            Toys</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope className="mt-2"></FaEnvelope>
                            Contact</NavLink>
                    </li>
                    
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;