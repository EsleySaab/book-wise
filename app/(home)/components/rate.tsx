"use client";

import { Star } from "lucide-react";

interface RatingProps {
  value: number;
}

const Rating = ({ value }: RatingProps) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-6 w-6 ${i <= value ? "fill-purple-100 text-purple-100" : "text-gray-400"}`}
        />,
      );
    }
    return stars;
  };

  return <div className="flex space-x-1">{renderStars()}</div>;
};

export default Rating;
