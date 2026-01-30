import React from 'react';
import Icon from '../../../components/AppIcon';

const ParticipationHeatmap = ({ heatmapData }) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = ['12am', '4am', '8am', '12pm', '4pm', '8pm'];

  const getIntensityColor = (value) => {
    if (value >= 80) return 'bg-primary';
    if (value >= 60) return 'bg-primary/70';
    if (value >= 40) return 'bg-primary/50';
    if (value >= 20) return 'bg-primary/30';
    return 'bg-primary/10';
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 lg:p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Icon name="Calendar" size={20} color="var(--color-primary)" />
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Activity Heatmap
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="caption text-muted-foreground">Low</span>
          <div className="flex gap-1">
            {[10, 30, 50, 70, 90]?.map((value, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded ${getIntensityColor(value)}`}
              />
            ))}
          </div>
          <span className="caption text-muted-foreground">High</span>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-custom">
        <div className="min-w-[500px]">
          <div className="grid grid-cols-[80px_repeat(7,1fr)] gap-2">
            <div />
            {days?.map((day) => (
              <div key={day} className="text-center caption text-muted-foreground font-medium">
                {day}
              </div>
            ))}

            {hours?.map((hour, hourIndex) => (
              <React.Fragment key={hour}>
                <div className="flex items-center caption text-muted-foreground">
                  {hour}
                </div>
                {days?.map((day, dayIndex) => {
                  const value = heatmapData?.[dayIndex]?.[hourIndex] || 0;
                  return (
                    <div
                      key={`${day}-${hour}`}
                      className={`
                        aspect-square rounded ${getIntensityColor(value)}
                        hover:ring-2 hover:ring-primary transition-smooth cursor-pointer
                      `}
                      title={`${day} ${hour}: ${value}% activity`}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="caption text-muted-foreground mb-1">Peak Activity</p>
            <p className="font-semibold text-foreground">Wed 6pm-8pm</p>
          </div>
          <div>
            <p className="caption text-muted-foreground mb-1">Lowest Activity</p>
            <p className="font-semibold text-foreground">Sun 2am-4am</p>
          </div>
          <div>
            <p className="caption text-muted-foreground mb-1">Avg Daily Sessions</p>
            <p className="font-semibold text-foreground data-text">3.2</p>
          </div>
          <div>
            <p className="caption text-muted-foreground mb-1">Most Active Day</p>
            <p className="font-semibold text-foreground">Wednesday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipationHeatmap;
