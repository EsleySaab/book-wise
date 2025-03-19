"use client";

import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  onChange?: (value: number) => void;
  size?: number;
}

const Rate = ({ value, onChange, size = 6 }: RatingProps) => {
  const handleClick = (newValue: number) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  const renderStars = () => {
    const stars = [];
    const clampedValue = Math.min(value, 5);

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          onClick={() => handleClick(i)}
          className={`h-${size} w-${size} cursor-pointer transition-colors duration-200 ${
            i <= clampedValue
              ? "fill-purple-100 text-purple-100"
              : "text-gray-400 hover:text-purple-200"
          }`}
        />,
      );
    }
    return stars;
  };

  return <div className="flex space-x-1">{renderStars()}</div>;
};

export default Rate;
