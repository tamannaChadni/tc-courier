// import { Link } from 'react-router-dom';

// const AdminMenu = () => (
//   <nav>
//     <Link to="/all-parcels" className="menu-item">All Parcels</Link>
//     <Link to="/all-users" className="menu-item">All Users</Link>
//     <Link to="/all-delivery-men" className="menu-item">All Delivery Men</Link>
//     <Link to="/statistics" className="menu-item">Statistics</Link>
//   </nav>
// );

// export default AdminMenu;
import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='All Parcels' address='all-parcels' />
      <MenuItem icon={FaUserCog} label='All Users' address='all-users' />
      <MenuItem icon={FaUserCog} label='All Delivery Men' address='all-delivery-men' />
      <MenuItem icon={FaUserCog} label='Statistics' address='statistics' />
    </>
  )
}

export default AdminMenu

