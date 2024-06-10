

import  { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const AllParcels = () => {
  const [parcels, setParcels] = useState([]);
  const [deliveryMen, setDeliveryMen] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [selectedDeliveryMan, setSelectedDeliveryMan] = useState('');
  const [approximateDeliveryDate, setApproximateDeliveryDate] = useState('');
  const [searchDates, setSearchDates] = useState({ from: '', to: '' });

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const response = await axios.get('/parcels');
        setParcels(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching parcels:', error);
        setLoading(false);
      }
    };

    const fetchDeliveryMen = async () => {
      try {
        const response = await axios.get('/delivery-men');
        setDeliveryMen(response.data);
      } catch (error) {
        console.error('Error fetching delivery men:', error);
      }
    };

    fetchParcels();
    fetchDeliveryMen();
  }, []);

  const openModal = (parcel) => {
    setSelectedParcel(parcel);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedParcel(null);
    setSelectedDeliveryMan('');
    setApproximateDeliveryDate('');
  };

  const handleAssign = async () => {
    try {
      await axios.put(`/parcels/${selectedParcel._id}/assign`, {
        deliveryManId: selectedDeliveryMan,
        approximateDeliveryDate,
      });

      setParcels((prevParcels) =>
        prevParcels.map((parcel) =>
          parcel._id === selectedParcel._id
            ? { ...parcel, status: 'On The Way', deliveryManId: selectedDeliveryMan }
            : parcel
        )
      );

      closeModal();
    } catch (error) {
      console.error('Error assigning delivery man:', error);
    }
  };

  const handleSearch = async () => {
    const { from, to } = searchDates;
    try {
      const response = await axios.get('/parcels/search', {
        params: { from, to },
      });
      setParcels(response.data);
    } catch (error) {
      console.error('Error searching parcels:', error);
    }
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Parcels</h1>
      <div className="mb-4">
        <label className="mr-2">From:</label>
        <input
          type="date"
          value={searchDates.from}
          onChange={(e) => setSearchDates({ ...searchDates, from: e.target.value })}
        />
        <label className="ml-4 mr-2">To:</label>
        <input
          type="date"
          value={searchDates.to}
          onChange={(e) => setSearchDates({ ...searchDates, to: e.target.value })}
        />
        <button onClick={handleSearch} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 border-b">User’s Name</th>
            <th className="py-2 border-b">User’s Phone</th>
            <th className="py-2 border-b">Booking Date</th>
            <th className="py-2 border-b">Requested Delivery Date</th>
            <th className="py-2 border-b">Cost</th>
            <th className="py-2 border-b">Status</th>
            <th className="py-2 border-b">Manage</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel) => (
            <tr key={parcel._id}>
              <td className="border px-4 py-2">{parcel.userName}</td>
              <td className="border px-4 py-2">{parcel.userPhone}</td>
              <td className="border px-4 py-2">{new Date(parcel.bookingDate).toLocaleDateString()}</td>
              <td className="border px-4 py-2">{new Date(parcel.requestedDeliveryDate).toLocaleDateString()}</td>
              <td className="border px-4 py-2">{parcel.cost}</td>
              <td className="border px-4 py-2">{parcel.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => openModal(parcel)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalIsOpen && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Manage Parcel">
          <h2 className="text-xl font-bold mb-4">Manage Parcel</h2>
          <div className="mb-4">
            <label className="block mb-2">Assign Delivery Man:</label>
            <select
              value={selectedDeliveryMan}
              onChange={(e) => setSelectedDeliveryMan(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Delivery Man</option>
              {deliveryMen.map((man) => (
                <option key={man._id} value={man._id}>
                  {man.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Approximate Delivery Date:</label>
            <input
              type="date"
              value={approximateDeliveryDate}
              onChange={(e) => setApproximateDeliveryDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button onClick={handleAssign} className="bg-blue-500 text-white px-4 py-2 rounded">
            Assign
          </button>
          <button onClick={closeModal} className="ml-4 bg-red-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </Modal>
      )}
    </div>
  );
};

export default AllParcels;
