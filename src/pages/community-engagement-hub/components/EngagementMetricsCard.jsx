import React from 'react';
import Icon from '../../../components/AppIcon';

const EngagementMetricsCard = ({ title, value, change, trend, icon, color = 'primary' }) => {
  const isPositive = change >= 0;
  const trendIcon = trend === 'up' ? 'TrendingUp' : trend === 'down' ? 'TrendingDown' : 'Minus';

  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-elevation-2 hover-lift transition-smooth">
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className={`w-10 h-10 md:w-12 md:h-12 bg-${color}/10 rounded-lg flex items-center justify-center`}>
          <Icon name={icon} size={20} color={`var(--color-${color})`} className="md:w-6 md:h-6" />
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${isPositive ? 'bg-success/10' : 'bg-error/10'}`}>
          <Icon 
            name={trendIcon} 
            size={14} 
            color={isPositive ? 'var(--color-success)' : 'var(--color-error)'} 
          />
          <span className={`caption font-medium ${isPositive ? 'text-success' : 'text-error'}`}>
            {Math.abs(change)}%
          </span>
        </div>
      </div>
      
      <h3 className="caption text-muted-foreground mb-1 md:mb-2">{title}</h3>
      <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground data-text">
        {value}
      </p>
    </div>
  );
};

export default EngagementMetricsCard;
