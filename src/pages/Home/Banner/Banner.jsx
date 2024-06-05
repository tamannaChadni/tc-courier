
// import { IoIosSearch } from "react-icons/io";



const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(./cover.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            A trusted provider of courier services.
          </h1>
          <p className="mb-5">
            We deliver your products safely to your home 
             <br />in a reasonable time.
          </p>
          <div className="join">
  <input className="input input-bordered join-item" placeholder="Search"/>
  <button className="btn join-item rounded-r-full bg-orange-600 text-white">Search</button>
</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
