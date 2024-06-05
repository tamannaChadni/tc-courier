import CountUp from "react-countup";

const StaticData = () => {
  return (
    <div className=" lg:ml-64 lg:mb-3">
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-value text-orange-600">
            <CountUp start={0} end={100}></CountUp>%
          </div>
          <div className="stat-title font-semibold ">
            {" "}
            Number of Parcel Booked
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value  text-orange-600">
            <CountUp start={0} end={90}></CountUp>%
          </div>
          <div className="stat-title font-semibold">
            Number of Parcel Delivered
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value text-orange-600">
            <CountUp start={0} end={80}></CountUp>%
          </div>
          <div className="stat-title font-semibold">
           registered users
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticData;
