

import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/review?deliveryManId=${user.id}`);
        setReviews(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [user.id]);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={review.reviewerImage}
                alt={review.reviewerName}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{review.reviewerName}</h2>
                <p className="text-gray-600">{new Date(review.reviewDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-yellow-500">{`Rating: ${review.rating}/5`}</span>
            </div>
            <div>
              <p className="text-gray-700">{review.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
