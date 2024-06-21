

import  { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { axiosCommon } from '../../../hooks/useAxiosCommon';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const MyDeliveryList = () => {
  const { user } = useAuth();
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        // const response = await axiosCommon.get(`/parcel?deliveryManId=${user._id}`);
        const response = await axiosCommon.get('/parcel');
        setParcels(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching parcels:', error);
        setLoading(false);
      }
    };

    fetchParcels();
  }, [user.id]);

  // const handleViewLocation = (parcelId) => {
  //   // Handle view location logic
  //   console.log('View location for parcel:', parcelId);
  // };

  // const handleCancel = async (parcelId) => {
  //   const confirmCancel = window.confirm('Are you sure you want to cancel this parcel?');
  //   if (confirmCancel) {
  //     try {
  //       await axios.patch(`/parcels/${parcelId}`, { status: 'cancelled' });
  //       setParcels(parcels.map(parcel => parcel.id === parcelId ? { ...parcel, status: 'cancelled' } : parcel));
  //     } catch (error) {
  //       console.error('Error cancelling parcel:', error);
  //     }
  //   }
  // };

  // const handleDeliver = async (parcelId) => {
  //   const confirmDeliver = window.confirm('Are you sure you want to mark this parcel as delivered?');
  //   if (confirmDeliver) {
  //     try {
  //       await axios.patch(`/api/parcels/${parcelId}`, { status: 'delivered' });
  //       setParcels(parcels.map(parcel => parcel.id === parcelId ? { ...parcel, status: 'delivered' } : parcel));
  //     } catch (error) {
  //       console.error('Error delivering parcel:', error);
  //     }
  //   }
  // };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Delivery List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Booked User’s Name</th>
            <th className="py-2">Receiver’s Name</th>
            {/* <th className="py-2">Booked User’s Phone</th> */}
            <th className="py-2">Requested Delivery Date</th>
            {/* <th className="py-2">Approximate Delivery Date</th> */}
            <th className="py-2">Receiver’s Phone Number</th>
            <th className="py-2">Receiver’s Address</th>
            {/* <th className="py-2">Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel) => (
            <tr key={parcel._id}>
              <td className="border px-4 py-2">{parcel.name}</td>
              <td className="border px-4 py-2">{parcel.receiversName}</td>
              {/* <td className="border px-4 py-2">{parcel.bookedUserPhone}</td> */}
              <td className="border px-4 py-2">{new Date(parcel.requestedDeliveryDate).toLocaleDateString()}</td>
              {/* <td className="border px-4 py-2">{parcel.approximateDeliveryDate ? new Date(parcel.approximateDeliveryDate).toLocaleDateString() : 'N/A'}</td> */}
              <td className="border px-4 py-2">{parcel.receiversPhoneNumber}</td>
              <td className="border px-4 py-2">{parcel.parcelDeliveryAddress}</td>
              {/* <td className="border px-4 py-2">
                <button
                  onClick={() => handleViewLocation(parcel.id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2 ml-2"
                >
                  View Location
                </button>
                <br />
                <button
                  onClick={() => handleCancel(parcel.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2 ml-2 mt-2"
                  disabled={parcel.status === 'cancelled' || parcel.status === 'delivered'}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeliver(parcel.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded ml-2 mt-2"
                  disabled={parcel.status === 'delivered'}
                >
                  Deliver
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyDeliveryList;
