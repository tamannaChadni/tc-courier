import { Link } from 'react-router-dom';

const AdminMenu = () => (
  <nav>
    <Link to="/all-parcels" className="menu-item">All Parcels</Link>
    <Link to="/all-users" className="menu-item">All Users</Link>
    <Link to="/all-delivery-men" className="menu-item">All Delivery Men</Link>
    <Link to="/statistics" className="menu-item">Statistics</Link>
  </nav>
);

export default AdminMenu;
