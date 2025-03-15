import React from 'react';

const StatisticsCard = ({ icon, title, value, change, changeColor, avatars, className }) => {
  return (
    <div className={`bg-white px-6 w-full ${className}`}>
      <div className="flex items-center mb-4">
        <img src={`assets/${icon}.png`} alt={title} className="mr-3 max-h-[30%] max-w-[30%]" />
        <div>
          <p className="text test-gray-300">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {change && <p className={changeColor}>{change}</p>}
          {avatars && (
            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`User ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
