import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LiveActivityFeed = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'score_update':
        return { name: 'TrendingUp', color: 'success' };
      case 'new_participant':
        return { name: 'UserPlus', color: 'primary' };
      case 'challenge_completed':
        return { name: 'CheckCircle2', color: 'accent' };
      case 'milestone':
        return { name: 'Award', color: 'warning' };
      default:
        return { name: 'Activity', color: 'muted' };
    }
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const activityTime = new Date(timestamp);
    const diffMs = now - activityTime;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return activityTime?.toLocaleDateString();
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-elevation-1 h-full flex flex-col">
      <div className="p-4 md:p-5 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Activity" size={20} color="var(--color-primary)" />
            <h3 className="font-heading font-semibold text-foreground text-base md:text-lg">
              Live Activity
            </h3>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-success/10 rounded-md">
            <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
            <span className="caption text-xs font-medium text-success-foreground">Live</span>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-custom p-4 md:p-5 space-y-4">
        {activities?.map((activity) => {
          const iconConfig = getActivityIcon(activity?.type);
          return (
            <div key={activity?.id} className="flex gap-3 group">
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-${iconConfig?.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth`}>
                <Icon name={iconConfig?.name} size={16} color={`var(--color-${iconConfig?.color})`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="caption text-sm text-foreground font-medium line-clamp-2">
                    {activity?.message}
                  </p>
                  <span className="caption text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
                    {formatTimestamp(activity?.timestamp)}
                  </span>
                </div>
                
                {activity?.user && (
                  <div className="flex items-center gap-2 mt-2">
                    <Image
                      src={activity?.user?.avatar}
                      alt={activity?.user?.avatarAlt}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span className="caption text-xs text-muted-foreground">
                      {activity?.user?.name}
                    </span>
                  </div>
                )}
                
                {activity?.challengeName && (
                  <div className="flex items-center gap-1.5 mt-2">
                    <Icon name="Target" size={12} color="var(--color-muted-foreground)" />
                    <span className="caption text-xs text-muted-foreground">
                      {activity?.challengeName}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveActivityFeed;
