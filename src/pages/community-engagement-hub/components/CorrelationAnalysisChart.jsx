import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Icon from '../../../components/AppIcon';

const CorrelationAnalysisChart = () => {
  const [selectedMetric, setSelectedMetric] = useState('engagement');

  const correlationData = [
    { challengeType: 'Steps', participants: 245, engagementScore: 87, completionRate: 78 },
    { challengeType: 'Hydration', participants: 189, engagementScore: 92, completionRate: 85 },
    { challengeType: 'Meditation', participants: 156, engagementScore: 76, completionRate: 68 },
    { challengeType: 'Sleep', participants: 198, engagementScore: 81, completionRate: 72 },
    { challengeType: 'Nutrition', participants: 167, engagementScore: 88, completionRate: 80 },
    { challengeType: 'Exercise', participants: 223, engagementScore: 85, completionRate: 75 },
    { challengeType: 'Reading', participants: 134, engagementScore: 73, completionRate: 65 },
    { challengeType: 'Social', participants: 201, engagementScore: 90, completionRate: 82 }
  ];

  const metrics = [
    { value: 'engagement', label: 'Engagement Score', color: '#0F766E' },
    { value: 'completion', label: 'Completion Rate', color: '#059669' }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0]?.payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-elevation-3">
          <p className="font-medium text-foreground mb-2">{data?.challengeType}</p>
          <div className="space-y-1 caption">
            <p className="text-muted-foreground">
              Participants: <span className="text-foreground font-medium data-text">{data?.participants}</span>
            </p>
            <p className="text-muted-foreground">
              Engagement: <span className="text-foreground font-medium data-text">{data?.engagementScore}%</span>
            </p>
            <p className="text-muted-foreground">
              Completion: <span className="text-foreground font-medium data-text">{data?.completionRate}%</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-elevation-2">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
        <div>
          <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-1">
            Challenge Type Correlation Analysis
          </h3>
          <p className="caption text-muted-foreground">
            Relationship between participation and performance metrics
          </p>
        </div>

        <div className="flex items-center gap-2">
          {metrics?.map((metric) => (
            <button
              key={metric?.value}
              onClick={() => setSelectedMetric(metric?.value)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-smooth press-scale ${
                selectedMetric === metric?.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {metric?.label}
            </button>
          ))}
        </div>
      </div>
      <div className="h-64 md:h-80 lg:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis
              type="number"
              dataKey="participants"
              name="Participants"
              stroke="var(--color-muted-foreground)"
              tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
              label={{ value: 'Number of Participants', position: 'insideBottom', offset: -10, fill: 'var(--color-foreground)' }}
            />
            <YAxis
              type="number"
              dataKey={selectedMetric === 'engagement' ? 'engagementScore' : 'completionRate'}
              name={selectedMetric === 'engagement' ? 'Engagement Score' : 'Completion Rate'}
              stroke="var(--color-muted-foreground)"
              tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
              label={{ 
                value: selectedMetric === 'engagement' ? 'Engagement Score (%)' : 'Completion Rate (%)', 
                angle: -90, 
                position: 'insideLeft',
                fill: 'var(--color-foreground)'
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Scatter
              name={selectedMetric === 'engagement' ? 'Engagement Score' : 'Completion Rate'}
              data={correlationData}
              fill={metrics?.find(m => m?.value === selectedMetric)?.color}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 p-3 bg-muted/50 rounded-md">
        <div className="flex items-start gap-2">
          <Icon name="Info" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
          <p className="caption text-muted-foreground">
            <strong className="text-foreground">Insight:</strong> Higher participant counts correlate with 
            {selectedMetric === 'engagement' ? ' increased engagement scores' : ' better completion rates'}, 
            suggesting social proof drives performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorrelationAnalysisChart;
