
import  { useState, useEffect } from 'react';
// import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import { axiosCommon } from '../../../hooks/useAxiosCommon';
import toast from 'react-hot-toast';

const BookParcel = () => {
  const { user } = useAuth()
  // console.log(user);
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    phoneNumber: '',
    parcelType: '',
    parcelWeight: '',
    receiversName: '',
    receiversPhoneNumber: '',
    parcelDeliveryAddress: '',
    requestedDeliveryDate: '',
    deliveryAddressLatitude: '',
    deliveryAddressLongitude: '',
    price: 0,
  });
console.log(formData);
  useEffect(() => {
    // Update price when parcel weight changes
    const weight = parseFloat(formData.parcelWeight);
    if (weight <= 1) {
      setFormData({ ...formData, price: 50 });
    } else if (weight <= 2) {
      setFormData({ ...formData, price: 100 });
    } else {
      setFormData({ ...formData, price: 150 });
    }
  }, [formData.parcelWeight]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosCommon.post('/parcel', { ...formData });
      toast.success('Parcel booked successfully!');
    } catch (error) {
      console.error('Error booking parcel:', error);
      toast.error('Failed to book parcel. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book a Parcel</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.displayName}
            readOnly
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Parcel Type</label>
          <input
            type="text"
            name="parcelType"
            value={formData.parcelType}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Parcel Weight (kg)</label>
          <input
            type="number"
            name="parcelWeight"
            value={formData.parcelWeight}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Receiver Name</label>
          <input
            type="text"
            name="receiversName"
            value={formData.receiversName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Receiver Phone Number</label>
          <input
            type="text"
            name="receiversPhoneNumber"
            value={formData.receiversPhoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Parcel Delivery Address</label>
          <input
            type="text"
            name="parcelDeliveryAddress"
            value={formData.parcelDeliveryAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Requested Delivery Date</label>
          <input
            type="date"
            name="requestedDeliveryDate"
            value={formData.requestedDeliveryDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Delivery Address Latitude</label>
          <input
            type="text"
            name="deliveryAddressLatitude"
            value={formData.deliveryAddressLatitude}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Delivery Address Longitude</label>
          <input
            type="text"
            name="deliveryAddressLongitude"
            value={formData.deliveryAddressLongitude}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label>Price (Tk)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            readOnly
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2  bg-orange-500 text-white rounded"
        >
          Book a parcel
        </button>
      </form>
    </div>
  );
};

export default BookParcel;
