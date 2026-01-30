import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeaderboardTable = ({ participants, onParticipantClick }) => {
  const [sortConfig, setSortConfig] = useState({ key: 'rank', direction: 'asc' });

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig?.key === key && sortConfig?.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const sortedParticipants = [...participants]?.sort((a, b) => {
    if (sortConfig?.key === 'rank') {
      return sortConfig?.direction === 'asc' ? a?.rank - b?.rank : b?.rank - a?.rank;
    }
    if (sortConfig?.key === 'score') {
      return sortConfig?.direction === 'asc' ? a?.currentScore - b?.currentScore : b?.currentScore - a?.currentScore;
    }
    if (sortConfig?.key === 'progress') {
      return sortConfig?.direction === 'asc' ? a?.progressPercentage - b?.progressPercentage : b?.progressPercentage - a?.progressPercentage;
    }
    if (sortConfig?.key === 'lastActive') {
      return sortConfig?.direction === 'asc' 
        ? new Date(a.lastActive) - new Date(b.lastActive)
        : new Date(b.lastActive) - new Date(a.lastActive);
    }
    return 0;
  });

  const getTrendIcon = (trend) => {
    if (trend > 0) return { name: 'TrendingUp', color: 'var(--color-success)' };
    if (trend < 0) return { name: 'TrendingDown', color: 'var(--color-error)' };
    return { name: 'Minus', color: 'var(--color-muted-foreground)' };
  };

  const formatLastActive = (date) => {
    const now = new Date();
    const diff = Math.floor((now - new Date(date)) / 1000);
    
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  const SortButton = ({ columnKey, label }) => (
    <button
      onClick={() => handleSort(columnKey)}
      className="flex items-center gap-1 hover:text-primary transition-smooth"
    >
      <span>{label}</span>
      <Icon 
        name={sortConfig?.key === columnKey && sortConfig?.direction === 'desc' ? 'ChevronDown' : 'ChevronUp'} 
        size={16}
        color={sortConfig?.key === columnKey ? 'var(--color-primary)' : 'var(--color-muted-foreground)'}
      />
    </button>
  );

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto scrollbar-custom">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-4 py-3 text-left">
                <SortButton columnKey="rank" label="Rank" />
              </th>
              <th className="px-4 py-3 text-left min-w-[200px]">Participant</th>
              <th className="px-4 py-3 text-left">
                <SortButton columnKey="score" label="Score" />
              </th>
              <th className="px-4 py-3 text-left">
                <SortButton columnKey="progress" label="Progress" />
              </th>
              <th className="px-4 py-3 text-left">Trend</th>
              <th className="px-4 py-3 text-left">
                <SortButton columnKey="lastActive" label="Last Active" />
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedParticipants?.map((participant, index) => {
              const trendIcon = getTrendIcon(participant?.trend);
              return (
                <tr
                  key={participant?.id}
                  onClick={() => onParticipantClick(participant)}
                  className="border-b border-border hover:bg-muted/30 transition-smooth cursor-pointer"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {participant?.rank <= 3 && (
                        <Icon 
                          name="Award" 
                          size={18} 
                          color={participant?.rank === 1 ? '#FFD700' : participant?.rank === 2 ? '#C0C0C0' : '#CD7F32'} 
                        />
                      )}
                      <span className="font-semibold data-text">{participant?.rank}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={participant?.avatar}
                          alt={participant?.avatarAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-foreground truncate">{participant?.name}</p>
                        <p className="caption text-muted-foreground truncate">{participant?.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-semibold data-text text-foreground">
                      {participant?.currentScore?.toLocaleString()}
                    </span>
                    <span className="caption text-muted-foreground ml-1">steps</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-smooth"
                            style={{ width: `${Math.min(participant?.progressPercentage, 100)}%` }}
                          />
                        </div>
                        <span className="caption data-text text-muted-foreground whitespace-nowrap">
                          {participant?.progressPercentage}%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <Icon name={trendIcon?.name} size={18} color={trendIcon?.color} />
                      <span className="caption data-text" style={{ color: trendIcon?.color }}>
                        {Math.abs(participant?.trend)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="caption text-muted-foreground data-text">
                      {formatLastActive(participant?.lastActive)}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
