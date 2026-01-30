import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const RealtimeStatusIndicator = () => {
  const [connectionStatus, setConnectionStatus] = useState('connected');
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const updateInterval = setInterval(() => {
      setLastUpdate(new Date());
    }, 5000);

    return () => clearInterval(updateInterval);
  }, []);

  const getStatusConfig = () => {
    switch (connectionStatus) {
      case 'connected':
        return {
          color: 'success',
          icon: 'Wifi',
          label: 'Connected',
          description: 'Real-time data sync active'
        };
      case 'connecting':
        return {
          color: 'warning',
          icon: 'RefreshCw',
          label: 'Connecting',
          description: 'Establishing connection...'
        };
      case 'disconnected':
        return {
          color: 'error',
          icon: 'WifiOff',
          label: 'Disconnected',
          description: 'Connection lost - retrying'
        };
      default:
        return {
          color: 'muted',
          icon: 'Wifi',
          label: 'Unknown',
          description: 'Status unavailable'
        };
    }
  };

  const formatLastUpdate = () => {
    const now = new Date();
    const diff = Math.floor((now - lastUpdate) / 1000);
    
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return lastUpdate?.toLocaleTimeString();
  };

  const status = getStatusConfig();

  return (
    <>
      <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-card rounded-md border border-border">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 bg-${status?.color} rounded-full ${connectionStatus === 'connected' ? 'animate-pulse' : ''}`} />
          <Icon name={status?.icon} size={16} color={`var(--color-${status?.color})`} />
          <span className="caption font-medium text-foreground">{status?.label}</span>
        </div>
        
        <div className="h-4 w-px bg-border" />
        
        <div className="flex items-center gap-1.5">
          <Icon name="Clock" size={14} color="var(--color-muted-foreground)" />
          <span className="caption text-muted-foreground data-text">{formatLastUpdate()}</span>
        </div>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="lg:hidden flex items-center gap-2 px-3 py-2 bg-card rounded-md border border-border press-scale transition-smooth"
        aria-label="Connection status"
      >
        <div className={`w-2 h-2 bg-${status?.color} rounded-full ${connectionStatus === 'connected' ? 'animate-pulse' : ''}`} />
        <Icon name={status?.icon} size={16} color={`var(--color-${status?.color})`} />
      </button>
      {isExpanded && (
        <div className="lg:hidden fixed top-16 right-4 z-1100 bg-card rounded-md shadow-elevation-3 border border-border p-4 min-w-[240px]">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-heading font-semibold text-foreground">Connection Status</h4>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 hover:bg-muted rounded transition-smooth"
            >
              <Icon name="X" size={16} />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 bg-${status?.color} rounded-full ${connectionStatus === 'connected' ? 'animate-pulse' : ''}`} />
              <Icon name={status?.icon} size={18} color={`var(--color-${status?.color})`} />
              <span className="font-medium text-foreground">{status?.label}</span>
            </div>
            
            <p className="caption text-muted-foreground">{status?.description}</p>
            
            <div className="pt-2 border-t border-border">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={14} color="var(--color-muted-foreground)" />
                <span className="caption text-muted-foreground">Last update:</span>
              </div>
              <span className="caption text-foreground data-text font-medium">{formatLastUpdate()}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RealtimeStatusIndicator;
