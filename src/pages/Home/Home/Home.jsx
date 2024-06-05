import Banner from "../Banner/Banner";

import Featured from "../Featured/Featured";
import StaticData from "../StaticData/StaticData";
import TopDeliveryPerson from "../TopDeliveryPerson/TopDeliveryPerson";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <StaticData></StaticData>
            <TopDeliveryPerson></TopDeliveryPerson>
           
        </div>
    );
};

export default Home;