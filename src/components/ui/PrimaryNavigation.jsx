import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const PrimaryNavigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: 'Dashboard',
      path: '/main-dashboard-overview',
      icon: 'BarChart3',
      tooltip: 'Real-time challenge overview and performance monitoring'
    },
    {
      label: 'Challenge Analytics',
      path: '/challenge-analytics-detail',
      icon: 'TrendingUp',
      tooltip: 'Detailed performance insights and participant tracking'
    },
    {
      label: 'Community Hub',
      path: '/community-engagement-hub',
      icon: 'Users',
      tooltip: 'Social engagement analytics and user behavior patterns'
    }
  ];

  const isActive = (path) => location?.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-1000 bg-card shadow-elevation-2 hidden lg:block">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-smooth">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Activity" size={24} color="var(--color-primary)" />
              </div>
              <span className="text-xl font-heading font-semibold text-foreground">
                SocialWellnessTracker
              </span>
            </Link>

            <div className="flex items-center gap-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-md font-medium
                    transition-smooth hover-lift press-scale
                    ${isActive(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-elevation-1'
                      : 'text-foreground hover:bg-muted'
                    }
                  `}
                  title={item?.tooltip}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-success/10 rounded-md">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="caption text-success-foreground font-medium">Live</span>
            </div>
          </div>
        </div>
      </nav>
      <nav className="fixed top-0 left-0 right-0 z-1000 bg-card shadow-elevation-2 lg:hidden">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Activity" size={20} color="var(--color-primary)" />
            </div>
            <span className="text-lg font-heading font-semibold text-foreground">
              SWT
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-success/10 rounded-md">
              <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
              <span className="caption text-success-foreground text-xs font-medium">Live</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-muted transition-smooth press-scale"
              aria-label="Toggle menu"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-card shadow-elevation-3 border-t border-border">
            <div className="flex flex-col p-4 gap-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-md font-medium
                    transition-smooth press-scale
                    ${isActive(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-elevation-1'
                      : 'text-foreground hover:bg-muted'
                    }
                  `}
                >
                  <Icon name={item?.icon} size={20} />
                  <div className="flex flex-col">
                    <span>{item?.label}</span>
                    <span className="caption text-xs opacity-70">{item?.tooltip}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <nav className="fixed bottom-0 left-0 right-0 z-1000 bg-card shadow-elevation-3 border-t border-border md:hidden">
        <div className="flex items-center justify-around h-14 px-2">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`
                flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md
                transition-smooth press-scale min-w-[72px]
                ${isActive(item?.path)
                  ? 'text-primary' :'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              <Icon name={item?.icon} size={20} />
              <span className="caption text-xs font-medium">{item?.label}</span>
            </Link>
          ))}
        </div>
      </nav>
      <div className="h-16 lg:block hidden" />
      <div className="h-14 md:hidden block" />
    </>
  );
};

export default PrimaryNavigation;
