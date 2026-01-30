import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ParticipantDetailModal = ({ participant, onClose }) => {
  if (!participant) return null;

  const activityHistory = [
    { date: '01/29/2026', score: 12450, change: +850 },
    { date: '01/28/2026', score: 11600, change: +1200 },
    { date: '01/27/2026', score: 10400, change: +650 },
    { date: '01/26/2026', score: 9750, change: +920 },
    { date: '01/25/2026', score: 8830, change: +780 }
  ];

  const achievements = [
    { name: 'Week Warrior', icon: 'Award', color: '#FFD700', date: '01/28/2026' },
    { name: 'Consistency King', icon: 'Target', color: '#C0C0C0', date: '01/25/2026' },
    { name: 'Early Bird', icon: 'Sunrise', color: '#CD7F32', date: '01/23/2026' }
  ];

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-1000 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-1001 flex items-center justify-center p-4">
        <div className="bg-card rounded-lg border border-border shadow-elevation-4 w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-custom">
          <div className="sticky top-0 bg-card border-b border-border p-4 lg:p-6 flex items-center justify-between">
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Participant Details
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-smooth"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          <div className="p-4 lg:p-6 space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={participant?.avatar}
                  alt={participant?.avatarAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-heading font-semibold text-foreground mb-1">
                  {participant?.name}
                </h4>
                <p className="text-muted-foreground mb-2">{participant?.email}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-md">
                    <Icon name="Award" size={16} color="var(--color-primary)" />
                    <span className="caption font-medium text-primary">Rank #{participant?.rank}</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-success/10 rounded-md">
                    <Icon name="TrendingUp" size={16} color="var(--color-success)" />
                    <span className="caption font-medium text-success">+{participant?.trend}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="caption text-muted-foreground mb-1">Current Score</p>
                <p className="text-xl font-heading font-semibold text-foreground data-text">
                  {participant?.currentScore?.toLocaleString()}
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="caption text-muted-foreground mb-1">Progress</p>
                <p className="text-xl font-heading font-semibold text-foreground">
                  {participant?.progressPercentage}%
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="caption text-muted-foreground mb-1">Streak</p>
                <p className="text-xl font-heading font-semibold text-foreground data-text">
                  7 days
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="caption text-muted-foreground mb-1">Avg Daily</p>
                <p className="text-xl font-heading font-semibold text-foreground data-text">
                  1,780
                </p>
              </div>
            </div>

            <div>
              <h5 className="font-heading font-semibold text-foreground mb-3">
                Recent Activity
              </h5>
              <div className="space-y-2">
                {activityHistory?.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="Calendar" size={18} color="var(--color-muted-foreground)" />
                      <span className="caption text-foreground">{activity?.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-foreground data-text">
                        {activity?.score?.toLocaleString()}
                      </span>
                      <div className="flex items-center gap-1">
                        <Icon 
                          name={activity?.change > 0 ? 'TrendingUp' : 'TrendingDown'} 
                          size={16} 
                          color={activity?.change > 0 ? 'var(--color-success)' : 'var(--color-error)'}
                        />
                        <span 
                          className="caption font-medium data-text"
                          style={{ color: activity?.change > 0 ? 'var(--color-success)' : 'var(--color-error)' }}
                        >
                          {activity?.change > 0 ? '+' : ''}{activity?.change}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-heading font-semibold text-foreground mb-3">
                Achievements
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {achievements?.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center">
                      <Icon name={achievement?.icon} size={20} color={achievement?.color} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{achievement?.name}</p>
                      <p className="caption text-muted-foreground">{achievement?.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-border">
              <Button
                variant="outline"
                iconName="MessageSquare"
                iconPosition="left"
                fullWidth
              >
                Send Message
              </Button>
              <Button
                variant="default"
                iconName="UserPlus"
                iconPosition="left"
                fullWidth
              >
                View Full Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParticipantDetailModal;
