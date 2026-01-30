import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';

const ScoreDistributionChart = ({ distributionData }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-elevation-2">
          <p className="caption font-semibold text-foreground mb-1">
            {payload?.[0]?.payload?.range}
          </p>
          <p className="caption text-muted-foreground">
            Participants: <span className="font-semibold text-foreground data-text">{payload?.[0]?.value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 lg:p-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="BarChart2" size={20} color="var(--color-primary)" />
        <h3 className="text-lg font-heading font-semibold text-foreground">
          Score Distribution
        </h3>
      </div>

      <div className="w-full h-64 md:h-80" aria-label="Score distribution histogram">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={distributionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="range" 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="count" 
              fill="var(--color-primary)" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="caption text-muted-foreground mb-1">Median Score</p>
          <p className="font-semibold text-foreground data-text">8,450</p>
        </div>
        <div>
          <p className="caption text-muted-foreground mb-1">Mode Range</p>
          <p className="font-semibold text-foreground">8k-10k</p>
        </div>
        <div>
          <p className="caption text-muted-foreground mb-1">Std Deviation</p>
          <p className="font-semibold text-foreground data-text">2,340</p>
        </div>
        <div>
          <p className="caption text-muted-foreground mb-1">Outliers</p>
          <p className="font-semibold text-foreground data-text">12</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreDistributionChart;
