

import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'

const DeliveryManMenu = () => (
 
    <>
      <MenuItem icon={FaUserCog} label='My Delivery List' address='my-delivery-list' />
      <MenuItem icon={FaUserCog} label='My Reviews' address='my-reviews' />
      
    </>
    
);

export default DeliveryManMenu;
