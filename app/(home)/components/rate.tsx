"use client";

import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  size?: number;
}

const Rate = ({ value, size = 6 }: RatingProps) => {
  const renderStars = () => {
    const stars = [];
    const clampedValue = Math.min(value, 5);

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-${size} w-${size} ${i <= clampedValue ? "fill-purple-100 text-purple-100" : "text-gray-400"}`}
        />,
      );
    }
    return stars;
  };

  return <div className="flex space-x-1">{renderStars()}</div>;
};

export default Rate;
