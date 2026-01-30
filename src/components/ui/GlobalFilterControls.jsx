import React, { useState, createContext, useContext } from 'react';
import Icon from '../AppIcon';
import Select from './Select';

const FilterContext = createContext();

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within FilterProvider');
  }
  return context;
};

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    dateRange: '7days',
    challenge: 'all',
    status: 'all'
  });

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      dateRange: '7days',
      challenge: 'all',
      status: 'all'
    });
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilter, resetFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

const GlobalFilterControls = () => {
  const { filters, updateFilter, resetFilters } = useFilters();
  const [isExpanded, setIsExpanded] = useState(false);

  const dateRangeOptions = [
    { value: '24hours', label: 'Last 24 Hours' },
    { value: '7days', label: 'Last 7 Days' },
    { value: '30days', label: 'Last 30 Days' },
    { value: '90days', label: 'Last 90 Days' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const challengeOptions = [
    { value: 'all', label: 'All Challenges' },
    { value: 'active', label: 'Active Challenges' },
    { value: 'completed', label: 'Completed Challenges' },
    { value: 'upcoming', label: 'Upcoming Challenges' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'paused', label: 'Paused' },
    { value: 'completed', label: 'Completed' }
  ];

  const hasActiveFilters = filters?.dateRange !== '7days' || filters?.challenge !== 'all' || filters?.status !== 'all';

  return (
    <>
      <div className="hidden lg:block fixed top-16 left-0 right-0 z-100 bg-muted/50 border-b border-border">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Filter" size={18} color="var(--color-foreground)" />
              <span className="font-medium text-foreground">Filters</span>
            </div>

            <div className="flex items-center gap-3">
              <Select
                options={dateRangeOptions}
                value={filters?.dateRange}
                onChange={(value) => updateFilter('dateRange', value)}
                placeholder="Date Range"
                className="w-48"
              />

              <Select
                options={challengeOptions}
                value={filters?.challenge}
                onChange={(value) => updateFilter('challenge', value)}
                placeholder="Challenge"
                className="w-48"
              />

              <Select
                options={statusOptions}
                value={filters?.status}
                onChange={(value) => updateFilter('status', value)}
                placeholder="Status"
                className="w-40"
              />
            </div>
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground bg-background rounded-md border border-border transition-smooth press-scale"
            >
              <Icon name="X" size={16} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>
      <div className="lg:hidden fixed top-16 left-0 right-0 z-100 bg-muted/50 border-b border-border">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between px-4 py-3 text-foreground transition-smooth"
        >
          <div className="flex items-center gap-2">
            <Icon name="Filter" size={18} />
            <span className="font-medium">Filters</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-primary rounded-full" />
            )}
          </div>
          <Icon name={isExpanded ? 'ChevronUp' : 'ChevronDown'} size={20} />
        </button>

        {isExpanded && (
          <div className="bg-card border-t border-border p-4 space-y-3">
            <Select
              label="Date Range"
              options={dateRangeOptions}
              value={filters?.dateRange}
              onChange={(value) => updateFilter('dateRange', value)}
            />

            <Select
              label="Challenge"
              options={challengeOptions}
              value={filters?.challenge}
              onChange={(value) => updateFilter('challenge', value)}
            />

            <Select
              label="Status"
              options={statusOptions}
              value={filters?.status}
              onChange={(value) => updateFilter('status', value)}
            />

            {hasActiveFilters && (
              <button
                onClick={() => {
                  resetFilters();
                  setIsExpanded(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-background rounded-md border border-border transition-smooth press-scale"
              >
                <Icon name="X" size={16} />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        )}
      </div>
      <div className="h-14 lg:block hidden" />
      <div className={`${isExpanded ? 'h-auto' : 'h-14'} lg:hidden block transition-smooth`} />
    </>
  );
};

export default GlobalFilterControls;
