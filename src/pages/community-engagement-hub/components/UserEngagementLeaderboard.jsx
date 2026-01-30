import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const UserEngagementLeaderboard = () => {
  const topUsers = [
  {
    id: 1,
    rank: 1,
    name: "Sarah Mitchell",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_170699746-1763294878713.png",
    avatarAlt: "Professional headshot of woman with shoulder-length brown hair wearing blue blazer smiling warmly at camera",
    activityScore: 2847,
    badges: ["🏆", "⭐", "🔥"],
    trend: "up",
    change: 12
  },
  {
    id: 2,
    rank: 2,
    name: "Marcus Johnson",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a184de25-1763292715446.png",
    avatarAlt: "Professional headshot of African American man with short black hair wearing gray suit and glasses",
    activityScore: 2654,
    badges: ["⭐", "🔥"],
    trend: "up",
    change: 8
  },
  {
    id: 3,
    rank: 3,
    name: "Emily Chen",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1b32f79-1763293656871.png",
    avatarAlt: "Professional headshot of Asian woman with long black hair wearing white blouse smiling confidently",
    activityScore: 2431,
    badges: ["🔥", "💪"],
    trend: "down",
    change: -3
  },
  {
    id: 4,
    rank: 4,
    name: "David Rodriguez",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb825b5d-1763292809998.png",
    avatarAlt: "Professional headshot of Hispanic man with short dark hair wearing navy blue shirt",
    activityScore: 2289,
    badges: ["💪"],
    trend: "up",
    change: 15
  },
  {
    id: 5,
    rank: 5,
    name: "Jessica Taylor",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b032f6ab-1763294605043.png",
    avatarAlt: "Professional headshot of woman with blonde hair wearing green sweater smiling brightly",
    activityScore: 2156,
    badges: ["⭐"],
    trend: "up",
    change: 5
  }];


  const getRankColor = (rank) => {
    if (rank === 1) return 'text-yellow-500';
    if (rank === 2) return 'text-gray-400';
    if (rank === 3) return 'text-amber-600';
    return 'text-muted-foreground';
  };

  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-elevation-2 h-full">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-1">
            Top Engaged Users
          </h3>
          <p className="caption text-muted-foreground">Most active community members</p>
        </div>
        <Icon name="Award" size={20} color="var(--color-primary)" />
      </div>
      <div className="space-y-3">
        {topUsers?.map((user) =>
        <div
          key={user?.id}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth press-scale cursor-pointer">

            <div className="relative">
              <span className={`text-xl font-heading font-bold ${getRankColor(user?.rank)}`}>
                #{user?.rank}
              </span>
            </div>

            <div className="relative">
              <Image
              src={user?.avatar}
              alt={user?.avatarAlt}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />

              {user?.rank <= 3 &&
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Crown" size={12} color="white" />
                </div>
            }
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium text-foreground truncate">{user?.name}</h4>
                <div className="flex gap-0.5">
                  {user?.badges?.map((badge, idx) =>
                <span key={idx} className="text-sm">{badge}</span>
                )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="caption text-muted-foreground data-text">
                  {user?.activityScore?.toLocaleString()} pts
                </span>
                <div className={`flex items-center gap-1 ${user?.trend === 'up' ? 'text-success' : 'text-error'}`}>
                  <Icon
                  name={user?.trend === 'up' ? 'ArrowUp' : 'ArrowDown'}
                  size={12} />

                  <span className="caption font-medium">{Math.abs(user?.change)}%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-md transition-smooth press-scale">
        View Full Leaderboard
      </button>
    </div>);

};

export default UserEngagementLeaderboard;
