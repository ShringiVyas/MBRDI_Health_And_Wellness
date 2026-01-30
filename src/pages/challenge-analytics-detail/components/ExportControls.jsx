import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const ExportControls = ({ onExport }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [exportOptions, setExportOptions] = useState({
    leaderboard: true,
    charts: true,
    statistics: true,
    heatmap: false,
    distribution: false
  });

  const handleExport = (format) => {
    onExport(format, exportOptions);
    setIsOpen(false);
  };

  const toggleOption = (key) => {
    setExportOptions(prev => ({ ...prev, [key]: !prev?.[key] }));
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        iconName="Download"
        iconPosition="left"
        onClick={() => setIsOpen(!isOpen)}
      >
        Export Report
      </Button>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-12 z-50 w-80 bg-card rounded-lg border border-border shadow-elevation-3 p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-heading font-semibold text-foreground">Export Options</h4>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-muted rounded transition-smooth"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <Checkbox
                label="Leaderboard Data"
                checked={exportOptions?.leaderboard}
                onChange={() => toggleOption('leaderboard')}
              />
              <Checkbox
                label="Performance Charts"
                checked={exportOptions?.charts}
                onChange={() => toggleOption('charts')}
              />
              <Checkbox
                label="Statistics Summary"
                checked={exportOptions?.statistics}
                onChange={() => toggleOption('statistics')}
              />
              <Checkbox
                label="Activity Heatmap"
                checked={exportOptions?.heatmap}
                onChange={() => toggleOption('heatmap')}
              />
              <Checkbox
                label="Score Distribution"
                checked={exportOptions?.distribution}
                onChange={() => toggleOption('distribution')}
              />
            </div>

            <div className="space-y-2 pt-4 border-t border-border">
              <Button
                variant="default"
                iconName="FileText"
                iconPosition="left"
                fullWidth
                onClick={() => handleExport('pdf')}
              >
                Export as PDF
              </Button>
              <Button
                variant="outline"
                iconName="Table"
                iconPosition="left"
                fullWidth
                onClick={() => handleExport('csv')}
              >
                Export as CSV
              </Button>
              <Button
                variant="outline"
                iconName="Mail"
                iconPosition="left"
                fullWidth
                onClick={() => handleExport('email')}
              >
                Schedule Email Report
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ExportControls;
