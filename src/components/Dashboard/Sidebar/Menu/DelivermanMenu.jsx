import { Link } from 'react-router-dom';

const DeliveryManMenu = () => (
  <nav>
    <Link to="/my-delivery-list" className="menu-item">My Delivery List</Link>
    <Link to="/my-reviews" className="menu-item">My Reviews</Link>
  </nav>
);

export default DeliveryManMenu;
