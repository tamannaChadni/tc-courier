
const NavBar = () => {

    // const navOptions = <>
    //     <li><a>Item 555</a></li>
    //     <li tabIndex={0}>
    //         <a className="justify-between">
    //             Parent
    //             <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
    //         </a>
    //         <ul className="p-2">
    //             <li><a>Submenu 1</a></li>
    //             <li><a>Submenu 2</a></li>
    //         </ul>
    //     </li>
    //     <li><a>Item 3</a></li>
    // </>
    // navbar   text-white
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
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-rounded btn-sm avatar text-white bg-orange-600">
        Login
        {/* <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div> */}
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
           User name
           
          </a>
        </li>
        <li><a>Dashboard</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
       
    );
};

export default NavBar;