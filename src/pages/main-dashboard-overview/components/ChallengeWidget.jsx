import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ChallengeWidget = ({ challenge }) => {
  const navigate = useNavigate();

  const getStatusColor = () => {
    if (challenge?.status === 'active') return 'success';
    if (challenge?.status === 'completed') return 'muted';
    return 'warning';
  };

  const handleViewDetails = () => {
    navigate('/challenge-analytics-detail', { state: { challengeId: challenge?.id } });
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-elevation-1 hover-lift transition-smooth overflow-hidden">
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h4 className="font-heading font-semibold text-foreground text-base md:text-lg mb-1 line-clamp-1">
              {challenge?.title}
            </h4>
            <p className="caption text-muted-foreground line-clamp-2">{challenge?.description}</p>
          </div>
          <div className={`flex items-center gap-1.5 px-2 py-1 bg-${getStatusColor()}/10 rounded-md ml-2 flex-shrink-0`}>
            <div className={`w-1.5 h-1.5 bg-${getStatusColor()} rounded-full ${challenge?.status === 'active' ? 'animate-pulse' : ''}`} />
            <span className="caption text-xs font-medium capitalize">{challenge?.status}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Users" size={16} color="var(--color-primary)" />
            </div>
            <div className="min-w-0">
              <p className="caption text-xs text-muted-foreground">Participants</p>
              <p className="font-semibold text-foreground data-text whitespace-nowrap">{challenge?.participants}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Target" size={16} color="var(--color-accent)" />
            </div>
            <div className="min-w-0">
              <p className="caption text-xs text-muted-foreground">Goal</p>
              <p className="font-semibold text-foreground data-text whitespace-nowrap">{challenge?.goal} {challenge?.unit}</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="caption text-xs text-muted-foreground">Top Performers</span>
            <span className="caption text-xs font-medium text-primary">View All</span>
          </div>
          <div className="space-y-2">
            {challenge?.topPerformers?.slice(0, 3)?.map((performer, index) => (
              <div key={performer?.id} className="flex items-center gap-3">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className="caption text-xs font-semibold text-muted-foreground w-4 flex-shrink-0">
                    #{index + 1}
                  </span>
                  <Image
                    src={performer?.avatar}
                    alt={performer?.avatarAlt}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <span className="caption text-sm font-medium text-foreground truncate">
                    {performer?.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <Icon name="Trophy" size={14} color="var(--color-warning)" />
                  <span className="caption text-sm font-semibold text-foreground data-text whitespace-nowrap">
                    {performer?.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          fullWidth
          iconName="BarChart3"
          iconPosition="left"
          onClick={handleViewDetails}
          className="press-scale"
        >
          View Analytics
        </Button>
      </div>
    </div>
  );
};

export default ChallengeWidget;
