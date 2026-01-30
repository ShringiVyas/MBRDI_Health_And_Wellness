import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';

const ScoreProgressionChart = ({ data, participants }) => {
  const [selectedParticipants, setSelectedParticipants] = useState(
    participants?.slice(0, 5)?.map(p => p?.id)
  );

  const colors = [
    'var(--color-primary)',
    'var(--color-secondary)',
    'var(--color-accent)',
    'var(--color-success)',
    'var(--color-warning)'
  ];

  const toggleParticipant = (participantId) => {
    setSelectedParticipants(prev => 
      prev?.includes(participantId)
        ? prev?.filter(id => id !== participantId)
        : [...prev, participantId]
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-elevation-2">
          <p className="caption font-semibold text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <div key={index} className="flex items-center gap-2 mb-1">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry?.color }}
              />
              <span className="caption text-foreground">
                {entry?.name}: <span className="font-semibold data-text">{entry?.value?.toLocaleString()}</span>
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Icon name="TrendingUp" size={20} color="var(--color-primary)" />
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Score Progression
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {participants?.slice(0, 8)?.map((participant, index) => (
            <button
              key={participant?.id}
              onClick={() => toggleParticipant(participant?.id)}
              className={`
                flex items-center gap-2 px-3 py-1.5 rounded-md border transition-smooth press-scale
                ${selectedParticipants?.includes(participant?.id)
                  ? 'bg-primary/10 border-primary text-primary' :'bg-background border-border text-muted-foreground hover:border-primary/50'
                }
              `}
            >
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: colors?.[index % colors?.length] }}
              />
              <span className="caption font-medium">{participant?.name?.split(' ')?.[0]}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full h-64 md:h-80 lg:h-96" aria-label="Score progression line chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis 
              dataKey="date" 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '12px' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ fontSize: '12px' }}
              iconType="circle"
            />
            {participants?.slice(0, 8)?.map((participant, index) => (
              selectedParticipants?.includes(participant?.id) && (
                <Line
                  key={participant?.id}
                  type="monotone"
                  dataKey={participant?.id}
                  name={participant?.name}
                  stroke={colors?.[index % colors?.length]}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              )
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ScoreProgressionChart;
