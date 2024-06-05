

const TopDeliveryPerson = () => {
    return (
        <div >
        <div className="text-center mt-4">
            <p className="font-semibold text-orange-500">Top Delivery Man</p>
            <h2 className="text-3xl font-bold ">Our services for you</h2>

        </div>
        <div className="flex gap-3 mt-4 mb-4 justify-center">

        

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="./p1.jpg"
            alt="person"
            className="rounded-xl w-[50%]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Mr. Keats</h2>
          <div >
          <p>Number of parcel Delivered : <span className=" text-orange-500 font-bold">40</span></p>
          <p>Average Ratings : <span className=" text-orange-500 font-bold">5</span></p>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="./p4.jpg"
            alt="person"
            className="rounded-xl w-[50%]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Mr. Json</h2>
          <div>
          <p>Number of parcel Delivered : <span className=" text-orange-500 font-bold">45</span></p>
          <p>Average Ratings : <span className=" text-orange-500 font-bold">5</span></p>
          </div>
          
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="./p5.png"
            alt="service"
            className="rounded-xl w-[50%]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Mr. Wiiliam</h2>
          <div>
          <p >Number of parcel Delivered : <span className=" text-orange-500 font-bold">30</span></p>
          <p>Average Ratings : <span className=" text-orange-500 font-bold">5</span></p>
          </div>
          
         
        </div>
      </div>
    </div>
    </div>
    );
};

export default TopDeliveryPerson;