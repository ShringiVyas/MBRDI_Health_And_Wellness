import React from 'react';
import PrimaryNavigation from '../../components/ui/PrimaryNavigation';
import RealtimeStatusIndicator from '../../components/ui/RealtimeStatusIndicator';
import GlobalFilterControls, { FilterProvider } from '../../components/ui/GlobalFilterControls';
import EngagementMetricsCard from './components/EngagementMetricsCard';
import ActivityHeatmap from './components/ActivityHeatmap';
import UserEngagementLeaderboard from './components/UserEngagementLeaderboard';
import RealtimeActivityStream from './components/RealtimeActivityStream';
import CorrelationAnalysisChart from './components/CorrelationAnalysisChart';
import CohortRetentionAnalysis from './components/CohortRetentionAnalysis';
import OnboardingFunnelVisualization from './components/OnboardingFunnelVisualization';
import ScrollToTop from '../../components/ScrollToTop';

const CommunityEngagementHub = () => {
  const engagementMetrics = [
    {
      title: 'Daily Active Users',
      value: '2,847',
      change: 12.5,
      trend: 'up',
      icon: 'Users',
      color: 'primary'
    },
    {
      title: 'Avg. Session Duration',
      value: '18m 34s',
      change: 8.3,
      trend: 'up',
      icon: 'Clock',
      color: 'accent'
    },
    {
      title: 'Challenge Participation',
      value: '76.8%',
      change: 5.2,
      trend: 'up',
      icon: 'Target',
      color: 'success'
    },
    {
      title: 'User Retention',
      value: '68.4%',
      change: -2.1,
      trend: 'down',
      icon: 'TrendingUp',
      color: 'warning'
    }
  ];

  return (
    <FilterProvider>
      <div className="min-h-screen bg-background">
        <ScrollToTop />
        <PrimaryNavigation />
        <GlobalFilterControls />

        <main className="px-4 md:px-6 lg:px-8 py-6 md:py-8 max-w-[1920px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 md:mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-2">
                Community Engagement Hub
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Comprehensive social wellness analytics and user behavior insights
              </p>
            </div>
            <RealtimeStatusIndicator />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {engagementMetrics?.map((metric, index) => (
              <EngagementMetricsCard key={index} {...metric} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-24 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="lg:col-span-16">
              <ActivityHeatmap />
            </div>
            <div className="lg:col-span-8">
              <UserEngagementLeaderboard />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-24 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="lg:col-span-16">
              <CorrelationAnalysisChart />
            </div>
            <div className="lg:col-span-8">
              <RealtimeActivityStream />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <CohortRetentionAnalysis />
            <OnboardingFunnelVisualization />
          </div>

          <div className="mt-8 p-4 md:p-6 bg-card rounded-lg shadow-elevation-2 border border-border">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                  Advanced Analytics Available
                </h3>
                <p className="caption text-muted-foreground">
                  Access predictive engagement scoring, advanced cohort segmentation, and custom report generation
                </p>
              </div>
              <button className="px-4 md:px-6 py-2 md:py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-smooth press-scale whitespace-nowrap">
                Explore Advanced Features
              </button>
            </div>
          </div>
        </main>

        <footer className="mt-12 py-6 border-t border-border bg-card">
          <div className="px-4 md:px-6 lg:px-8 max-w-[1920px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="caption text-muted-foreground text-center md:text-left">
                © {new Date()?.getFullYear()} SocialWellnessTracker. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="caption text-muted-foreground hover:text-foreground transition-smooth">
                  Privacy Policy
                </a>
                <a href="#" className="caption text-muted-foreground hover:text-foreground transition-smooth">
                  Terms of Service
                </a>
                <a href="#" className="caption text-muted-foreground hover:text-foreground transition-smooth">
                  Support
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </FilterProvider>
  );
};

export default CommunityEngagementHub;
