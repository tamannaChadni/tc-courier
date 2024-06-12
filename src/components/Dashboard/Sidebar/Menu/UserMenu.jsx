import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'


const UserMenu = () => (
  
<>
      <MenuItem icon={FaUserCog} label='All ParcelsBook a Parcel' address='book-parcel' />
      <MenuItem icon={FaUserCog} label='My Parcels' address='my-parcels' />
      <MenuItem icon={FaUserCog} label='My Profile' address='my-profile' />
     
    </>

    
);

export default UserMenu;
