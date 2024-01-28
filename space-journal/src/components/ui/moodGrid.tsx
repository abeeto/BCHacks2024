import React from 'react';
import {sentimentsArrayForThisYear, countSentimentsForThisYear} from '../../Helpers/Helper'

// Example component to render a "contributions" grid
const MoodGrid: React.FC = () => {
  // Assume a year of contributions (52 weeks x 7 days)
  const weeks = 52;
  const days = 7;

  // Generate an example data set with random contributions count for each day
  const data = sentimentsArrayForThisYear();

  // Function to determine the color based on the contribution count
  const colorForCount = (count: number) => {
    if (isNaN(count)) return 'bg-slate-600'
    if (count <= -7) return 'bg-red-600';
    if (count <= -4) return 'bg-amber-500';
    if (count === 0) return 'bg-yellow-300'; // no contributions
    if (count <= 4) return 'bg-green-400'; // 1-9 contributions
    return 'bg-green-600'; // 30+ contributions
  };

  return (
    <div className="bg-[#1E293B] p-4 text-white flex-row ml-2 mr-2">
      <div className="text-sm mb-2">{countSentimentsForThisYear()} contributions in 2024</div>
      <div className="flex gap-1.5 justify-center">
        {Array.from({ length: weeks }).map((_, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1.5">
            {Array.from({ length: days }).map((_, dayIndex) => {
              const count = data[weekIndex * days + dayIndex];
              return (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 ${colorForCount(count)} rounded-sm`}
                  style={{ opacity: isNaN(count) ? 0.3 : 1 }}
                />
              );
            })}
          </div>
        ))}
      </div>
      {/* Legend for contributions */}
      <div className="flex justify-end mt-2">
        <div className="flex items-center">
          <span className="text-xs text-gray-400 mr-2">Negative</span>
          <div className="flex gap-1">
            {[-7,-4,0,4,7].map((_, i) => (
              <div key={i} className={`w-3 h-3 ${colorForCount(_)} rounded-sm`} />
            ))}
          </div>
          <span className="text-xs text-gray-400 ml-2">Positive</span>
        </div>
      </div>
    </div>
  );
};

export default MoodGrid;
