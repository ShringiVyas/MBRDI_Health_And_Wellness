import React from 'react';
import Icon from '../../../components/AppIcon';

const ChallengeStatistics = ({ statistics }) => {
  const statCards = [
    {
      label: 'Participation Rate',
      value: `${statistics?.participationRate}%`,
      change: statistics?.participationChange,
      icon: 'Users',
      color: 'primary',
      description: `${statistics?.activeParticipants} of ${statistics?.totalParticipants} active`
    },
    {
      label: 'Average Score',
      value: statistics?.averageScore?.toLocaleString(),
      change: statistics?.averageScoreChange,
      icon: 'BarChart3',
      color: 'secondary',
      description: 'steps per participant'
    },
    {
      label: 'Completion Rate',
      value: `${statistics?.completionRate}%`,
      change: statistics?.completionChange,
      icon: 'CheckCircle',
      color: 'success',
      description: `${statistics?.completedParticipants} completed goal`
    },
    {
      label: 'Engagement Score',
      value: statistics?.engagementScore,
      change: statistics?.engagementChange,
      icon: 'Activity',
      color: 'accent',
      description: 'Based on activity frequency'
    }
  ];

  const getTrendIcon = (change) => {
    if (change > 0) return { name: 'TrendingUp', color: 'var(--color-success)' };
    if (change < 0) return { name: 'TrendingDown', color: 'var(--color-error)' };
    return { name: 'Minus', color: 'var(--color-muted-foreground)' };
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Icon name="PieChart" size={20} color="var(--color-primary)" />
        <h3 className="text-lg font-heading font-semibold text-foreground">
          Challenge Statistics
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {statCards?.map((stat, index) => {
          const trendIcon = getTrendIcon(stat?.change);
          return (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-4 hover-lift transition-smooth"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 bg-${stat?.color}/10 rounded-lg flex items-center justify-center`}>
                  <Icon name={stat?.icon} size={20} color={`var(--color-${stat?.color})`} />
                </div>
                <div className="flex items-center gap-1">
                  <Icon name={trendIcon?.name} size={16} color={trendIcon?.color} />
                  <span className="caption data-text font-medium" style={{ color: trendIcon?.color }}>
                    {Math.abs(stat?.change)}%
                  </span>
                </div>
              </div>
              <p className="caption text-muted-foreground mb-1">{stat?.label}</p>
              <p className="text-2xl font-heading font-semibold text-foreground data-text mb-1">
                {stat?.value}
              </p>
              <p className="caption text-muted-foreground">{stat?.description}</p>
            </div>
          );
        })}
      </div>
      <div className="bg-card rounded-lg border border-border p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="caption font-medium text-foreground">Benchmark Comparison</span>
          <Icon name="Info" size={16} color="var(--color-muted-foreground)" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="caption text-muted-foreground">vs. Previous Challenge</span>
            <span className="caption font-semibold text-success">+12.5%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="caption text-muted-foreground">vs. Platform Average</span>
            <span className="caption font-semibold text-primary">+8.3%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeStatistics;
