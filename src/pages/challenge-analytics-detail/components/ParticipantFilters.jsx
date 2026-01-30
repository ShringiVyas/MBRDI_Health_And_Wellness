import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const ParticipantFilters = ({ filters, onFilterChange, onReset }) => {
  const performanceOptions = [
    { value: 'all', label: 'All Participants' },
    { value: 'top-25', label: 'Top 25%' },
    { value: 'top-50', label: 'Top 50%' },
    { value: 'bottom-50', label: 'Bottom 50%' },
    { value: 'bottom-25', label: 'Bottom 25%' }
  ];

  const activityOptions = [
    { value: 'all', label: 'All Activity Levels' },
    { value: 'highly-active', label: 'Highly Active (Daily)' },
    { value: 'active', label: 'Active (3-6 days/week)' },
    { value: 'moderate', label: 'Moderate (1-2 days/week)' },
    { value: 'inactive', label: 'Inactive (< 1 day/week)' }
  ];

  const ageGroupOptions = [
    { value: 'all', label: 'All Age Groups' },
    { value: '18-24', label: '18-24 years' },
    { value: '25-34', label: '25-34 years' },
    { value: '35-44', label: '35-44 years' },
    { value: '45-54', label: '45-54 years' },
    { value: '55+', label: '55+ years' }
  ];

  const hasActiveFilters = filters?.performance !== 'all' || 
                          filters?.activity !== 'all' || 
                          filters?.ageGroup !== 'all';

  return (
    <div className="bg-card rounded-lg border border-border p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon name="Filter" size={20} color="var(--color-foreground)" />
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Participant Filters
          </h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onReset}
          >
            Reset
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Select
          label="Performance Quartile"
          options={performanceOptions}
          value={filters?.performance}
          onChange={(value) => onFilterChange('performance', value)}
        />

        <Select
          label="Activity Level"
          options={activityOptions}
          value={filters?.activity}
          onChange={(value) => onFilterChange('activity', value)}
        />

        <Select
          label="Age Group"
          options={ageGroupOptions}
          value={filters?.ageGroup}
          onChange={(value) => onFilterChange('ageGroup', value)}
        />
      </div>
    </div>
  );
};

export default ParticipantFilters;
