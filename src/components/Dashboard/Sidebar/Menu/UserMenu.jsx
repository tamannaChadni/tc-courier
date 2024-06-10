import { Link } from 'react-router-dom';

const UserMenu = () => (
  <nav>
    <Link to="/book-parcel" className="menu-item">Book a Parcel</Link>
    <Link to="/my-parcels" className="menu-item">My Parcels</Link>
    <Link to="/my-profile" className="menu-item">My Profile</Link>
  </nav>
);

export default UserMenu;
