import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import useRole from '../../../hooks/useRole'
import LoadingSpinner from '../../Shared/LoadingSpinner'
import UserMenu from './Menu/UserMenu'
import DeliveryManMenu from './Menu/DelivermanMenu'
import AdminMenu from './Menu/AdminMenu'

// const UserMenu = () => (
//   <nav>
//     <Link to="book-parcel" className="menu-item">Book a Parcel</Link>
//     <Link to="my-parcels" className="menu-item">My Parcels</Link>
//     <Link to="my-profile" className="menu-item">My Profile</Link>
//   </nav>
// );

// const DeliveryManMenu = () => (
//   <nav>
//     <Link to="my-delivery-list" className="menu-item">My Delivery List</Link>
//     <Link to="my-reviews" className="menu-item">My Reviews</Link>
//   </nav>
// );

// const AdminMenu = () => (
//   <nav>
//     <Link to="all-parcels" className="menu-item">All Parcels</Link>
//     <Link to="all-users" className="menu-item">All Users</Link>
//     <Link to="all-delivery-men" className="menu-item">All Delivery Men</Link>
//     <Link to="/dashboard" className="menu-item">Statistics</Link>
//   </nav>
// );

const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)
  const [role, isLoading] = useRole()
  
  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <p>TC Courier</p>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
              <Link to='/'>
                <p className='font-bold text-2xl text-orange-500'>TC Courier</p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {isLoading ? 
            //   <p>Loading...</p>
           (<LoadingSpinner/>) 
            : (
              <>
                {role === 'user' && <UserMenu />}
                {role === 'deliveryman' && <DeliveryManMenu />}
                {role === 'admin' && <AdminMenu />}
              </>
            )}
          </div>
        </div>

        <div>
          <hr />

          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />
            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
