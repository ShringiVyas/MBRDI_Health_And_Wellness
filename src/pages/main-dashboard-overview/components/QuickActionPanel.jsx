import React from 'react';
import Icon from '../../../components/AppIcon';


const QuickActionPanel = ({ onCreateChallenge, onExportData, onViewReports }) => {
  const quickActions = [
    {
      id: 'create',
      label: 'Create Challenge',
      description: 'Start a new wellness challenge',
      icon: 'Plus',
      color: 'primary',
      onClick: onCreateChallenge
    },
    {
      id: 'export',
      label: 'Export Data',
      description: 'Download analytics reports',
      icon: 'Download',
      color: 'secondary',
      onClick: onExportData
    },
    {
      id: 'reports',
      label: 'View Reports',
      description: 'Access detailed insights',
      icon: 'FileText',
      color: 'accent',
      onClick: onViewReports
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border shadow-elevation-1 p-4 md:p-5">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="Zap" size={20} color="var(--color-primary)" />
        <h3 className="font-heading font-semibold text-foreground text-base md:text-lg">
          Quick Actions
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {quickActions?.map((action) => (
          <button
            key={action?.id}
            onClick={action?.onClick}
            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-smooth press-scale text-left"
          >
            <div className={`w-10 h-10 rounded-lg bg-${action?.color}/10 flex items-center justify-center flex-shrink-0`}>
              <Icon name={action?.icon} size={20} color={`var(--color-${action?.color})`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground text-sm mb-0.5">{action?.label}</p>
              <p className="caption text-xs text-muted-foreground line-clamp-1">
                {action?.description}
              </p>
            </div>
            <Icon name="ChevronRight" size={16} color="var(--color-muted-foreground)" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActionPanel;
