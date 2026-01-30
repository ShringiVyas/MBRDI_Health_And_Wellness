import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';

const ChallengeSelector = ({ selectedChallenge, onChallengeChange }) => {
  const challengeOptions = [
    { 
      value: 'step-challenge-2026', 
      label: '10K Steps Daily Challenge',
      description: 'Active • 847 participants'
    },
    { 
      value: 'hydration-tracker', 
      label: 'Hydration Hero Challenge',
      description: 'Active • 623 participants'
    },
    { 
      value: 'meditation-mindfulness', 
      label: 'Mindful Minutes Challenge',
      description: 'Active • 512 participants'
    },
    { 
      value: 'nutrition-goals', 
      label: 'Healthy Eating Challenge',
      description: 'Completed • 1,234 participants'
    },
    { 
      value: 'sleep-quality', 
      label: 'Sleep Quality Challenge',
      description: 'Upcoming • 289 participants'
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-4">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Target" size={20} color="var(--color-primary)" />
        </div>
        <h2 className="text-xl lg:text-2xl font-heading font-semibold text-foreground">
          Challenge Analytics
        </h2>
      </div>
      
      <Select
        options={challengeOptions}
        value={selectedChallenge}
        onChange={onChallengeChange}
        placeholder="Select a challenge"
        searchable
        className="w-full lg:w-96"
      />
    </div>
  );
};

export default ChallengeSelector;
