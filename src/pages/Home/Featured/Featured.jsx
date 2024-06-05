const Featured = () => {
  return (
    
    <div >
        <div className="text-center mt-4">
            <p className="font-semibold text-orange-500">SERVICES</p>
            <h2 className="text-3xl font-bold ">Our services for you</h2>

        </div>
        <div className="flex gap-3 mt-4 mb-4 justify-center">

        

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="./services-1.svg"
            alt="service"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Business Services</h2>
          <p>
            Offering home delivery around the city, where your products will be
            at your doorstep within 48-72 hours.
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="./services-2.svg"
            alt="service"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Statewide Services</h2>
          <p>Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.</p>
          
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="./services-3.svg"
            alt="service"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Personal Services</h2>
          <p>You can trust us to safely deliver your most sensitive documents to the specific area in a short time.</p>
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Featured;
