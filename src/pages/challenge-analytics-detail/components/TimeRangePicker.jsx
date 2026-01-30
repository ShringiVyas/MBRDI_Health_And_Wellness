import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TimeRangePicker = ({ selectedRange, onRangeChange, onRefresh, lastRefresh }) => {
  const timeRanges = [
    { value: '24h', label: '24 Hours', icon: 'Clock' },
    { value: '7d', label: '7 Days', icon: 'Calendar' },
    { value: '30d', label: '30 Days', icon: 'CalendarDays' },
    { value: 'all', label: 'All Time', icon: 'Infinity' }
  ];

  const formatLastRefresh = () => {
    const now = new Date();
    const diff = Math.floor((now - lastRefresh) / 1000);
    
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return lastRefresh?.toLocaleTimeString();
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {timeRanges?.map((range) => (
            <Button
              key={range?.value}
              variant={selectedRange === range?.value ? 'default' : 'outline'}
              size="sm"
              iconName={range?.icon}
              iconPosition="left"
              onClick={() => onRangeChange(range?.value)}
            >
              {range?.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md">
            <Icon name="RefreshCw" size={14} color="var(--color-muted-foreground)" />
            <span className="caption text-muted-foreground data-text">
              {formatLastRefresh()}
            </span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            iconName="RefreshCw"
            onClick={onRefresh}
          >
            Refresh
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimeRangePicker;
