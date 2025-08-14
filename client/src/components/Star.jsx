import React, { useEffect, useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Simulate backend value
    const fetchRating = async () => {
      const mockBackendRating = 4; 
      setRating(mockBackendRating);
    };

    fetchRating();
  }, []);

  return (
    <div className="flex space-x-1 text-2xl">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? 'text-purple-600' : 'text-purple-600'}>
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
