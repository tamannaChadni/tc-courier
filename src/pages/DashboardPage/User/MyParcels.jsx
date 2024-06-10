import  { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const MyParcels = () => {
  const { user } = useAuth();
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const response = await axios.get(`/parcel?userId=${user.id}`);
        setParcels(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching parcels:', error);
        setLoading(false);
      }
    };

    fetchParcels();
  }, [user.id]);

  const handleUpdate = (parcelId) => {
    // Handle update logic
    console.log('Update parcel:', parcelId);
  };

  const handleCancel = (parcelId) => {
    // Handle cancel logic
    console.log('Cancel parcel:', parcelId);
  };

  const handleReview = (parcelId) => {
    // Handle review logic
    console.log('Review parcel:', parcelId);
  };

  const handlePay = (parcelId) => {
    // Handle pay logic
    console.log('Pay for parcel:', parcelId);
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Parcels</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="w-1/6 py-2">Parcel Type</th>
            <th className="w-1/6 py-2">Requested Delivery Date</th>
            <th className="w-1/6 py-2">Approximate Delivery Date</th>
            <th className="w-1/6 py-2">Booking Date</th>
            <th className="w-1/6 py-2">Delivery Men ID</th>
            <th className="w-1/6 py-2">Booking Status</th>
            <th className="w-1/6 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel) => (
            <tr key={parcel.id}>
              <td className="border px-4 py-2">{parcel.parcelType}</td>
              <td className="border px-4 py-2">{parcel.requestedDeliveryDate}</td>
              <td className="border px-4 py-2">{parcel.approximateDeliveryDate}</td>
              <td className="border px-4 py-2">{new Date(parcel.bookingDate).toLocaleDateString()}</td>
              <td className="border px-4 py-2">{parcel.deliveryMenId || 'N/A'}</td>
              <td className="border px-4 py-2">{parcel.bookingStatus}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleUpdate(parcel.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleCancel(parcel.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Cancel
                </button>
                {parcel.bookingStatus === 'delivered' && (
                  <button
                    onClick={() => handleReview(parcel.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Review
                  </button>
                )}
                <button
                  onClick={() => handlePay(parcel.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Pay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyParcels;

