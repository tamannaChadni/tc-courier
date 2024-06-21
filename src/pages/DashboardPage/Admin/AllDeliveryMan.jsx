import { useState, useEffect } from 'react';
// import axios from 'axios';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { axiosCommon } from '../../../hooks/useAxiosCommon';

const AllDeliveryMan = () => {
  const [deliveryMen, setDeliveryMen] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeliveryMen = async () => {
      try {
        const response = await axiosCommon.get('/delivery-men');
        setDeliveryMen(response.data);
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching delivery men:', error);
        setLoading(false);
      }
    };

    fetchDeliveryMen();
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Delivery Men</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 border-b">Delivery Man Name</th>
            <th className="py-2 border-b">Phone Number</th>
            <th className="py-2 border-b">Number of Parcels Delivered</th>
            <th className="py-2 border-b">Average Review</th>
          </tr>
        </thead>
        <tbody>
          {deliveryMen.map((deliveryMan) => (
            <tr key={deliveryMan.id}>
              <td className="border px-4 py-2">{deliveryMan.name}</td>
              <td className="border px-4 py-2">{deliveryMan.phoneNumber}</td>
              <td className="border px-4 py-2">{deliveryMan.parcelsDelivered}</td>
              <td className="border px-4 py-2">{deliveryMan.averageReview.toFixed(2) || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDeliveryMan;
