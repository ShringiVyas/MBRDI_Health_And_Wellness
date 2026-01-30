import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import MainDashboardOverview from './pages/main-dashboard-overview';
import ChallengeAnalyticsDetail from './pages/challenge-analytics-detail';
import CommunityEngagementHub from './pages/community-engagement-hub';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<MainDashboardOverview />} />
        <Route path="/main-dashboard-overview" element={<MainDashboardOverview />} />
        <Route path="/challenge-analytics-detail" element={<ChallengeAnalyticsDetail />} />
        <Route path="/community-engagement-hub" element={<CommunityEngagementHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
