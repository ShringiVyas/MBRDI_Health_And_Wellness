import React from 'react';
import Icon from '../../../components/AppIcon';

const CohortRetentionAnalysis = () => {
  const cohortData = [
    {
      cohort: 'Week 1 (Jan 1-7)',
      users: 450,
      retention: [100, 87, 76, 68, 62, 58, 54, 51]
    },
    {
      cohort: 'Week 2 (Jan 8-14)',
      users: 523,
      retention: [100, 89, 79, 71, 65, 60, 56]
    },
    {
      cohort: 'Week 3 (Jan 15-21)',
      users: 487,
      retention: [100, 91, 82, 74, 68, 63]
    },
    {
      cohort: 'Week 4 (Jan 22-28)',
      users: 612,
      retention: [100, 93, 85, 77, 71]
    }
  ];

  const getRetentionColor = (value) => {
    if (value >= 80) return 'bg-success text-success-foreground';
    if (value >= 60) return 'bg-warning text-warning-foreground';
    if (value >= 40) return 'bg-error/70 text-error-foreground';
    return 'bg-error text-error-foreground';
  };

  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-elevation-2">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div>
          <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-1">
            Cohort Retention Analysis
          </h3>
          <p className="caption text-muted-foreground">
            User retention rates by signup cohort
          </p>
        </div>
        <button className="p-2 hover:bg-muted rounded-md transition-smooth press-scale">
          <Icon name="Download" size={20} />
        </button>
      </div>
      <div className="overflow-x-auto scrollbar-custom">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2 caption text-muted-foreground font-medium">
                Cohort
              </th>
              <th className="text-center py-3 px-2 caption text-muted-foreground font-medium">
                Users
              </th>
              {Array.from({ length: 8 }, (_, i) => (
                <th key={i} className="text-center py-3 px-2 caption text-muted-foreground font-medium">
                  Week {i}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cohortData?.map((cohort, idx) => (
              <tr key={idx} className="border-b border-border hover:bg-muted/30 transition-smooth">
                <td className="py-3 px-2">
                  <div className="font-medium text-foreground text-sm">{cohort?.cohort}</div>
                </td>
                <td className="text-center py-3 px-2">
                  <span className="caption font-medium text-foreground data-text">
                    {cohort?.users}
                  </span>
                </td>
                {Array.from({ length: 8 }, (_, weekIdx) => (
                  <td key={weekIdx} className="text-center py-3 px-2">
                    {cohort?.retention?.[weekIdx] !== undefined ? (
                      <div className={`inline-flex items-center justify-center px-2 py-1 rounded-md ${getRetentionColor(cohort?.retention?.[weekIdx])}`}>
                        <span className="caption font-medium data-text">
                          {cohort?.retention?.[weekIdx]}%
                        </span>
                      </div>
                    ) : (
                      <span className="caption text-muted-foreground">-</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-3 bg-success/10 rounded-md border border-success/20">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="TrendingUp" size={16} color="var(--color-success)" />
            <span className="caption text-success font-medium">Strong Retention</span>
          </div>
          <p className="caption text-muted-foreground">≥80% retention rate</p>
        </div>

        <div className="p-3 bg-warning/10 rounded-md border border-warning/20">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="Minus" size={16} color="var(--color-warning)" />
            <span className="caption text-warning font-medium">Moderate Retention</span>
          </div>
          <p className="caption text-muted-foreground">60-79% retention rate</p>
        </div>

        <div className="p-3 bg-error/10 rounded-md border border-error/20">
          <div className="flex items-center gap-2 mb-1">
            <Icon name="TrendingDown" size={16} color="var(--color-error)" />
            <span className="caption text-error font-medium">Low Retention</span>
          </div>
          <p className="caption text-muted-foreground">&lt;60% retention rate</p>
        </div>
      </div>
    </div>
  );
};

export default CohortRetentionAnalysis;
