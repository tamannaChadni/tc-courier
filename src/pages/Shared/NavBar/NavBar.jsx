import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AiOutlineMenu } from 'react-icons/ai';
import avatarImg from '../../../assets/images/placeholder.jpg'
import toast from "react-hot-toast";

const NavBar = () => {
  // const axiosSecure = useAxiosSecure()
  const { user, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  // try {
  //   const currentUser = {
  //     email: user?.email,
  //     role: user?.role,
      
  //   }
  //   const { data } =  axiosSecure.put(`/user`, currentUser)
  //   console.log(data)
  //   if (data.modifiedCount > 0) {
  //     toast.success('Success! Please wait for admin confirmation')
  //   } else {
  //     toast.success('Please!, Wait for admin approval👊')
  //   }
  // } 

  // catch (err) {
  //   console.log(err)
  //   toast.error(err.message)
  // }
   
    return (
        
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-3xl text-orange-600 font-bold">TC Courier</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
       
        </div>
      </div>
     
    </div>
    {/* dropdown */}
    <div className="dropdown dropdown-end">
    <div
                  onClick={() => setIsOpen(!isOpen)}
                  className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                  <AiOutlineMenu />
                  <div className='hidden md:block'>
                    {/* Avatar */}
                    <img
                      className='rounded-full'
                      referrerPolicy='no-referrer'
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt='profile'
                      height='30'
                      width='30'
                    />
                  </div>
                </div>
           
                {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                  <div className='flex flex-col cursor-pointer'>
                    <Link
                      to='/'
                      className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to='/dashboard'
                          className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to='/login'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Login
                        </Link>
                        <Link
                          to='/signup'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
                      
                                
                           
    </div>
  </div>
</div>
       
    );
};

export default NavBar;