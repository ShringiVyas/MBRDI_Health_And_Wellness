import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ActivityHeatmap = () => {
  const [selectedCell, setSelectedCell] = useState(null);

  const heatmapData = [
    { day: 'Mon', hours: [2, 5, 8, 12, 15, 18, 22, 25, 20, 15, 10, 8, 6, 4, 3, 5, 8, 12, 18, 22, 25, 20, 15, 10] },
    { day: 'Tue', hours: [3, 6, 9, 14, 17, 20, 24, 28, 22, 16, 12, 9, 7, 5, 4, 6, 9, 14, 20, 24, 28, 22, 16, 12] },
    { day: 'Wed', hours: [4, 7, 10, 15, 19, 22, 26, 30, 24, 18, 14, 10, 8, 6, 5, 7, 10, 15, 22, 26, 30, 24, 18, 14] },
    { day: 'Thu', hours: [3, 6, 9, 13, 16, 19, 23, 27, 21, 15, 11, 8, 6, 4, 3, 5, 8, 13, 19, 23, 27, 21, 15, 11] },
    { day: 'Fri', hours: [5, 8, 11, 16, 20, 24, 28, 32, 26, 20, 16, 12, 10, 8, 7, 9, 12, 16, 24, 28, 32, 26, 20, 16] },
    { day: 'Sat', hours: [6, 9, 12, 18, 22, 26, 30, 35, 28, 22, 18, 14, 12, 10, 9, 11, 14, 18, 26, 30, 35, 28, 22, 18] },
    { day: 'Sun', hours: [5, 8, 11, 15, 19, 23, 27, 31, 25, 19, 15, 11, 9, 7, 6, 8, 11, 15, 23, 27, 31, 25, 19, 15] }
  ];

  const getIntensityColor = (value) => {
    if (value >= 30) return 'bg-primary';
    if (value >= 20) return 'bg-primary/70';
    if (value >= 10) return 'bg-primary/40';
    if (value >= 5) return 'bg-primary/20';
    return 'bg-muted';
  };

  const handleCellClick = (day, hour, value) => {
    setSelectedCell({ day, hour, value });
  };

  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-elevation-2">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-1">
            Community Activity Heatmap
          </h3>
          <p className="caption text-muted-foreground">
            User engagement patterns across the week
          </p>
        </div>
        <button className="p-2 hover:bg-muted rounded-md transition-smooth press-scale">
          <Icon name="Download" size={20} />
        </button>
      </div>
      {selectedCell && (
        <div className="mb-4 p-3 bg-primary/10 rounded-md border border-primary/20">
          <div className="flex items-center gap-2">
            <Icon name="Info" size={16} color="var(--color-primary)" />
            <span className="caption text-foreground">
              <strong>{selectedCell?.day}</strong> at <strong>{selectedCell?.hour}:00</strong> - 
              <strong className="ml-1">{selectedCell?.value} active users</strong>
            </span>
          </div>
        </div>
      )}
      <div className="overflow-x-auto scrollbar-custom">
        <div className="min-w-[600px]">
          <div className="flex gap-1 mb-2 ml-12">
            {Array.from({ length: 24 }, (_, i) => (
              <div key={i} className="flex-1 text-center">
                <span className="caption text-muted-foreground text-xs">
                  {i?.toString()?.padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-1">
            {heatmapData?.map((row) => (
              <div key={row?.day} className="flex items-center gap-1">
                <div className="w-10 text-right">
                  <span className="caption text-muted-foreground font-medium text-sm">
                    {row?.day}
                  </span>
                </div>
                <div className="flex gap-1 flex-1">
                  {row?.hours?.map((value, hourIndex) => (
                    <button
                      key={hourIndex}
                      onClick={() => handleCellClick(row?.day, hourIndex, value)}
                      className={`flex-1 h-8 md:h-10 rounded ${getIntensityColor(value)} hover:ring-2 hover:ring-primary transition-smooth press-scale`}
                      title={`${row?.day} ${hourIndex}:00 - ${value} users`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-border">
            <span className="caption text-muted-foreground">Less</span>
            <div className="flex gap-1">
              <div className="w-6 h-6 rounded bg-muted" />
              <div className="w-6 h-6 rounded bg-primary/20" />
              <div className="w-6 h-6 rounded bg-primary/40" />
              <div className="w-6 h-6 rounded bg-primary/70" />
              <div className="w-6 h-6 rounded bg-primary" />
            </div>
            <span className="caption text-muted-foreground">More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityHeatmap;
