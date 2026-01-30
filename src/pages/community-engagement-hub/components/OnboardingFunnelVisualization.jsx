import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const OnboardingFunnelVisualization = () => {
  const funnelData = [
    { stage: 'Sign Up', users: 1250, percentage: 100, color: '#0F766E' },
    { stage: 'Profile Setup', users: 1087, percentage: 87, color: '#14B8A6' },
    { stage: 'First Challenge Join', users: 892, percentage: 71, color: '#2DD4BF' },
    { stage: 'First Score Submit', users: 734, percentage: 59, color: '#5EEAD4' },
    { stage: 'Week 1 Active', users: 625, percentage: 50, color: '#99F6E4' }
  ];

  const dropoffData = [
    { from: 'Sign Up', to: 'Profile Setup', dropoff: 163, rate: 13 },
    { from: 'Profile Setup', to: 'First Challenge', dropoff: 195, rate: 18 },
    { from: 'First Challenge', to: 'First Score', dropoff: 158, rate: 18 },
    { from: 'First Score', to: 'Week 1 Active', dropoff: 109, rate: 15 }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0]?.payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-elevation-3">
          <p className="font-medium text-foreground mb-2">{data?.stage}</p>
          <div className="space-y-1 caption">
            <p className="text-muted-foreground">
              Users: <span className="text-foreground font-medium data-text">{data?.users?.toLocaleString()}</span>
            </p>
            <p className="text-muted-foreground">
              Conversion: <span className="text-foreground font-medium data-text">{data?.percentage}%</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-elevation-2">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-1">
            Onboarding Funnel Analysis
          </h3>
          <p className="caption text-muted-foreground">
            User progression through onboarding stages
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-md">
          <Icon name="Users" size={16} color="var(--color-primary)" />
          <span className="caption text-primary font-medium data-text">
            50% completion rate
          </span>
        </div>
      </div>
      <div className="h-64 md:h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={funnelData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis
              dataKey="stage"
              stroke="var(--color-muted-foreground)"
              tick={{ fill: 'var(--color-muted-foreground)', fontSize: 11 }}
              angle={-15}
              textAnchor="end"
              height={80}
            />
            <YAxis
              stroke="var(--color-muted-foreground)"
              tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }}
              label={{ value: 'Number of Users', angle: -90, position: 'insideLeft', fill: 'var(--color-foreground)' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="users" radius={[8, 8, 0, 0]}>
              {funnelData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry?.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3">
        <h4 className="font-heading font-semibold text-foreground">Drop-off Analysis</h4>
        {dropoffData?.map((dropoff, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
            <div className="flex items-center gap-3">
              <Icon name="ArrowRight" size={16} color="var(--color-muted-foreground)" />
              <div>
                <p className="caption font-medium text-foreground">
                  {dropoff?.from} → {dropoff?.to}
                </p>
                <p className="caption text-muted-foreground">
                  {dropoff?.dropoff} users dropped off
                </p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-md ${
              dropoff?.rate > 15 ? 'bg-error/10 text-error' : 'bg-warning/10 text-warning'
            }`}>
              <span className="caption font-medium data-text">{dropoff?.rate}%</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-primary/10 rounded-md border border-primary/20">
        <div className="flex items-start gap-2">
          <Icon name="Lightbulb" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
          <p className="caption text-foreground">
            <strong>Recommendation:</strong> Focus on improving the Profile Setup → First Challenge transition 
            with guided onboarding and personalized challenge recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFunnelVisualization;
