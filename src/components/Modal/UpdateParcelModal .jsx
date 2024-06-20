import  { useState } from 'react';

const UpdateParcelModal = ({ isOpen, onClose, parcel, onUpdate }) => {
  const [parcelType, setParcelType] = useState(parcel.parcelType);
  const [requestedDeliveryDate, setRequestedDeliveryDate] = useState(parcel.requestedDeliveryDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      ...parcel,
      parcelType,
      requestedDeliveryDate,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Update Parcel</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Parcel Type</label>
            <input
              type="text"
              value={parcelType}
              onChange={(e) => setParcelType(e.target.value)}
              className="mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Requested Delivery Date</label>
            <input
              type="date"
              value={requestedDeliveryDate}
              onChange={(e) => setRequestedDeliveryDate(e.target.value)}
              className="mt-1 block w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateParcelModal;
