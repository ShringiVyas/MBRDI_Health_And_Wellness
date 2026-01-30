import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementMilestones = ({ milestones }) => {
  const getMilestoneIcon = (type) => {
    const icons = {
      bronze: { name: 'Award', color: '#CD7F32' },
      silver: { name: 'Award', color: '#C0C0C0' },
      gold: { name: 'Award', color: '#FFD700' },
      platinum: { name: 'Crown', color: '#E5E4E2' },
      diamond: { name: 'Gem', color: '#B9F2FF' }
    };
    return icons?.[type] || icons?.bronze;
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 lg:p-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="Trophy" size={20} color="var(--color-primary)" />
        <h3 className="text-lg font-heading font-semibold text-foreground">
          Achievement Milestones
        </h3>
      </div>
      <div className="space-y-4">
        {milestones?.map((milestone, index) => {
          const icon = getMilestoneIcon(milestone?.type);
          const progressPercentage = (milestone?.achieved / milestone?.total) * 100;

          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Icon name={icon?.name} size={20} color={icon?.color} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{milestone?.name}</p>
                    <p className="caption text-muted-foreground">{milestone?.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground data-text">
                    {milestone?.achieved}/{milestone?.total}
                  </p>
                  <p className="caption text-muted-foreground">{progressPercentage?.toFixed(0)}%</p>
                </div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-smooth"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <p className="caption text-muted-foreground mb-1">Total Achievements</p>
            <p className="text-2xl font-heading font-semibold text-foreground data-text">
              {milestones?.reduce((sum, m) => sum + m?.achieved, 0)}
            </p>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <p className="caption text-muted-foreground mb-1">Completion Rate</p>
            <p className="text-2xl font-heading font-semibold text-foreground">
              {((milestones?.reduce((sum, m) => sum + m?.achieved, 0) / milestones?.reduce((sum, m) => sum + m?.total, 0)) * 100)?.toFixed(0)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementMilestones;
