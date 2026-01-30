import React from 'react';
import Icon from '../../../components/AppIcon';

const KPIMetricCard = ({ 
  title, 
  value, 
  unit, 
  trend, 
  trendValue, 
  icon, 
  color,
  sparklineData 
}) => {
  const getTrendColor = () => {
    if (trend === 'up') return 'text-success';
    if (trend === 'down') return 'text-error';
    return 'text-muted-foreground';
  };

  const getTrendIcon = () => {
    if (trend === 'up') return 'TrendingUp';
    if (trend === 'down') return 'TrendingDown';
    return 'Minus';
  };

  const maxSparkline = Math.max(...sparklineData);
  const normalizedData = sparklineData?.map(val => (val / maxSparkline) * 100);

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-elevation-1 hover-lift transition-smooth">
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className="flex-1">
          <p className="caption text-muted-foreground mb-1">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground data-text">
              {value}
            </h3>
            {unit && <span className="text-sm md:text-base text-muted-foreground">{unit}</span>}
          </div>
        </div>
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center bg-${color}/10`}>
          <Icon name={icon} size={20} color={`var(--color-${color})`} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className={`flex items-center gap-1.5 ${getTrendColor()}`}>
          <Icon name={getTrendIcon()} size={16} />
          <span className="caption font-medium data-text">{trendValue}</span>
        </div>

        <div className="flex items-end gap-0.5 h-8">
          {normalizedData?.map((height, index) => (
            <div
              key={index}
              className={`w-1 md:w-1.5 bg-${color} rounded-t opacity-60`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KPIMetricCard;
