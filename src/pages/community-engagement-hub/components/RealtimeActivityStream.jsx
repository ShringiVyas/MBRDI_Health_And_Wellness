import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RealtimeActivityStream = () => {
  const [activities, setActivities] = useState([
  {
    id: 1,
    type: 'score_submission',
    user: {
      name: "Alex Thompson",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_119edae7e-1763296718356.png",
      avatarAlt: "Professional headshot of man with short brown hair wearing blue shirt smiling at camera"
    },
    action: "submitted a score",
    challenge: "10K Steps Challenge",
    value: "12,450 steps",
    timestamp: new Date(Date.now() - 120000),
    status: "verified"
  },
  {
    id: 2,
    type: 'image_upload',
    user: {
      name: "Maria Garcia",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a36548bd-1763296665300.png",
      avatarAlt: "Professional headshot of Hispanic woman with long dark hair wearing red blouse smiling warmly"
    },
    action: "uploaded progress photo",
    challenge: "Hydration Challenge",
    timestamp: new Date(Date.now() - 300000),
    status: "processing"
  },
  {
    id: 3,
    type: 'achievement',
    user: {
      name: "James Wilson",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_130504d21-1763295915180.png",
      avatarAlt: "Professional headshot of man with gray hair wearing black suit and tie"
    },
    action: "earned a badge",
    badge: "7-Day Streak",
    timestamp: new Date(Date.now() - 480000),
    status: "completed"
  },
  {
    id: 4,
    type: 'social_interaction',
    user: {
      name: "Sophie Anderson",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b032f6ab-1763294605043.png",
      avatarAlt: "Professional headshot of woman with blonde hair wearing green sweater smiling brightly"
    },
    action: "commented on",
    target: "Marcus Johnson\'s progress",
    timestamp: new Date(Date.now() - 600000),
    status: "active"
  },
  {
    id: 5,
    type: 'score_submission',
    user: {
      name: "Ryan Martinez",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15e911a3b-1763296043591.png",
      avatarAlt: "Professional headshot of Hispanic man with short black hair wearing gray polo shirt"
    },
    action: "submitted a score",
    challenge: "Meditation Minutes",
    value: "45 minutes",
    timestamp: new Date(Date.now() - 720000),
    status: "verified"
  }]
  );

  const getActivityIcon = (type) => {
    switch (type) {
      case 'score_submission':return 'TrendingUp';
      case 'image_upload':return 'Image';
      case 'achievement':return 'Award';
      case 'social_interaction':return 'MessageCircle';
      default:return 'Activity';
    }
  };

  const getStatusBadge = (status) => {
    const configs = {
      verified: { color: 'success', icon: 'CheckCircle', label: 'Verified' },
      processing: { color: 'warning', icon: 'Clock', label: 'Processing' },
      completed: { color: 'primary', icon: 'Check', label: 'Completed' },
      active: { color: 'accent', icon: 'Zap', label: 'Active' }
    };
    return configs?.[status] || configs?.active;
  };

  const formatTimestamp = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return date?.toLocaleDateString();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities((prev) => prev?.map((activity) => ({
        ...activity,
        timestamp: activity?.timestamp
      })));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-elevation-2 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-1">
            Live Activity Stream
          </h3>
          <p className="caption text-muted-foreground">Real-time community updates</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="caption text-success font-medium">Live</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-custom space-y-3">
        {activities?.map((activity) => {
          const statusConfig = getStatusBadge(activity?.status);

          return (
            <div
              key={activity?.id}
              className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-smooth">

              <div className="flex items-start gap-3">
                <Image
                  src={activity?.user?.avatar}
                  alt={activity?.user?.avatarAlt}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0" />


                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-foreground">{activity?.user?.name}</span>
                      <Icon
                        name={getActivityIcon(activity?.type)}
                        size={14}
                        color="var(--color-muted-foreground)" />

                    </div>
                    <span className="caption text-muted-foreground whitespace-nowrap data-text">
                      {formatTimestamp(activity?.timestamp)}
                    </span>
                  </div>

                  <p className="caption text-muted-foreground mb-2">
                    {activity?.action}
                    {activity?.challenge &&
                    <span className="text-foreground font-medium ml-1">
                        {activity?.challenge}
                      </span>
                    }
                    {activity?.badge &&
                    <span className="text-primary font-medium ml-1">
                        {activity?.badge}
                      </span>
                    }
                    {activity?.target &&
                    <span className="text-foreground font-medium ml-1">
                        {activity?.target}
                      </span>
                    }
                  </p>

                  <div className="flex items-center justify-between">
                    {activity?.value &&
                    <span className="caption font-medium text-primary data-text">
                        {activity?.value}
                      </span>
                    }
                    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md bg-${statusConfig?.color}/10`}>
                      <Icon
                        name={statusConfig?.icon}
                        size={12}
                        color={`var(--color-${statusConfig?.color})`} />

                      <span className={`caption text-${statusConfig?.color} text-xs font-medium`}>
                        {statusConfig?.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>);

        })}
      </div>
      <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-md transition-smooth press-scale">
        Load More Activities
      </button>
    </div>);

};

export default RealtimeActivityStream;
