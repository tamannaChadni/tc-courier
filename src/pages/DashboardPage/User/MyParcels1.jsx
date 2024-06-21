import  { useState, useEffect } from 'react';

import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { axiosCommon } from '../../../hooks/useAxiosCommon';
// import { isToday } from 'date-fns';
import UpdateParcelModal from "../../../components/Modal/UpdateParcelModal ";
import toast from 'react-hot-toast';

const MyParcels = () => {
  const { user } = useAuth();
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedParcel, setSelectedParcel] = useState(null);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        // const response = await axiosCommon.get('/parcel/:email');
        const response = await axiosCommon.get(`/parcel/${user.email}`);
        setParcels(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching parcels:', error);
        setLoading(false);
      }
    };

    fetchParcels();
  }, [user.email]);

  const handleUpdate = (parcelId) => {
    console.log("jjjj", parcelId);
    const parcel = parcels.find((parcel) => parcel._id === parcelId);
    console.log(parcel._id);
    console.log(setSelectedParcel);
    setSelectedParcel(parcel);
    setIsModalOpen(true);
  };

  const handleCancel = async (parcelId) => {
    try {
      await axiosCommon.delete(`/parcel/${parcelId}`);
      setParcels(parcels.filter((parcel) => parcel._id !== parcelId));
      toast.success('Parcel deleted successfully!');
    } catch (error) {
      console.error("Error deleting parcel:", error);
    }
  };
  // const handleDelete = (_id) => {
  //   // console.log(_id);
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`https://moon-dining-server.vercel.app/purchase/${_id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           if (data.deletedCount > 0) {
  //             Swal.fire(
  //               "Deleted!",
  //               "Your order has been deleted.",
  //               "success"
  //             );
  //             // eslint-disable-next-line react/prop-types
  //             const remainingOrder = orderFood.filter((s) => s._id !== _id);
  //             // console.log(remainingOrder);
  //             setOrderFood(remainingOrder);
  //           }
  //         });
  //     }
  //   });
  // };

  const handleReview = (parcelId) => {
    // Handle review logic
    console.log('Review parcel:', parcelId);
  };

  const handlePay = (parcelId) => {
    // Handle pay logic
    console.log('Pay for parcel:', parcelId);
  };

  const handleUpdateParcel = async (updatedParcel) => {
    try {
      await axiosCommon.put(`/parcel/${updatedParcel._id}`, updatedParcel);
      setParcels((prevParcels) =>
        prevParcels.map((parcel) =>
          parcel._id === updatedParcel._id ? updatedParcel : parcel
        )
      );
    } catch (error) {
      console.error("Error updating parcel:", error);
    }
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
            {/* <th className="w-1/6 py-2">Approximate Delivery Date</th> */}
            {/* <th className="w-1/6 py-2">Booking Date</th>
            <th className="w-1/6 py-2">Delivery Men ID</th>
            <th className="w-1/6 py-2">Booking Status</th> */}
            <th className="w-1/6 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel) => (
            <tr key={parcel._id}>
              <td className="border px-4 py-2">{parcel.parcelType}</td>
              <td className="border px-4 py-2">{parcel.requestedDeliveryDate}</td>
              {/* <td className="border px-4 py-2">{parcel.approximateDeliveryDate}</td> */}
              
                  {/* <td className="border px-4 py-2">
                {isToday(parcel.bookingDate)
                  ? new Date().toLocaleDateString()
                  : new Date(parcel.bookingDate).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">{parcel.deliveryMenId || 'N/A'}</td>
              <td className="border px-4 py-2">{parcel.bookingStatus}</td> */}
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleUpdate(parcel._id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleCancel(parcel._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Cancel
                </button>
                {parcel.bookingStatus === 'delivered' && (
                  <button
                    onClick={() => handleReview(parcel._id)}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Review
                  </button>
                )}
                <button
                  onClick={() => handlePay(parcel._id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Pay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <UpdateParcelModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          parcel={selectedParcel}
          onUpdate={handleUpdateParcel}
        />
      )}
    </div>
  );
};

export default MyParcels;

